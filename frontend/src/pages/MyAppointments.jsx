import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const MyAppointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  
const navigate = useNavigate()

  const [appointments,setAppointments] = useState([])
  const months = [" ","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('/')
    return dateArray[0]+ " " + months[Number(dateArray[1])] + " " + dateArray[2]
   }
  
  const getUserAppointments = async () => {
    try {

      const {data} = await axios.get(backendUrl+'/api/user/appointments',{headers:{token}})

      if(data.success) {
        setAppointments(data.appointments.reverse())
       // console.log(data.appointments);
        
      }
         
    } catch(error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {

      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment',{appointmentId},{headers:{token}})
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
      
    }catch(error) {
      console.log(error);
      toast.error(error.message)
    }

  }

  const initPay =(order) =>{

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
       name: 'Appointment Payment',
       description: 'Appointment Payment',
       order_id: order.id,
       receipt: order.receipt,
       handler: async(response)=>{
        console.log(response);
        
       try {
        
         const { data} = await axios.post(backendUrl + '/api/user/verifyRazorpay',response,{headers:{token}})
         if (data.success) {
          getUserAppointments()
          navigate('/my-appointments')
         }

       } catch (error) {
        console.log(error);
        toast.error(error.message)
        
       }

       }
    }
  
    const rzp = new window.Razorpay(options)
    rzp.open()

  }

const appointmentRazorpay = async (appointmentId) =>{

 try {
  
  const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay', {appointmentId},{headers:{token}})
  if (data.success) {
   
    initPay(data.order)
    
    
  }

 } catch (error) {
  
 }

}

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  },[token])
  const isMissedAppointment = (slotDate, slotTime) => {
  // Parse slotDate "DD/MM/YYYY"
  const [day, month, year] = slotDate.split('/').map(Number);

  // Parse slotTime — example "10:30 AM" or "15:00"
  let [time, modifier] = slotTime.split(' '); // modifier can be AM/PM or undefined

  let [hours, minutes] = time.split(':').map(Number);

  if (modifier) {
    // Convert 12h format to 24h
    if (modifier.toUpperCase() === 'PM' && hours !== 12) {
      hours += 12;
    }
    if (modifier.toUpperCase() === 'AM' && hours === 12) {
      hours = 0;
    }
  }

  // Construct a Date object for appointment datetime
  const appointmentDateTime = new Date(year, month - 1, day, hours, minutes);

  // Get current datetime
  const now = new Date();

  // Return true if appointment datetime is before now (missed)
  return appointmentDateTime < now;
}

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-600 border-b'>My appointments</p>
       <div>
      {/* Filter non-cancelled appointments */}
      {appointments && appointments.filter(item => !item.cancelled).length > 0 ? (
        appointments
          .filter(item => !item.cancelled)
          .map((item, index) => (
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-700'>
                <p className='text-neutral-800 font-semibold italic'>{item.docData.name}</p>
                <p className='italic'>{item.docData.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1 '>Address:</p>
                <p className='text-xs italic'>{item.docData.address.line1}</p>
                <p className='text-xs italic'>{item.docData.address.line2}</p>
              <p className='text-sm mt-1'>
  <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime} 
  {isMissedAppointment(item.slotDate, item.slotTime) && !item.cancelled && !item.isCompleted && (
    <>
      <span className="text-red-600 font-bold ml-2 animate-pulse">Missed</span>
      {console.log("Missed appointment found for:", item._id, item.slotDate, item.slotTime)}
    </>
  )}
</p>
                {/* <p className='text-sm mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p> */}
              </div>
              

             <div className='flex flex-col gap-2 justify-end'>
  {/* Completed */}
  {item.isCompleted && (
    <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>
  )}

  {/* Cancelled */}
  {item.cancelled && (
    <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Cancelled</button>
  )}

  {/* Missed */}
  {!item.cancelled && !item.isCompleted && isMissedAppointment(item.slotDate, item.slotTime) && (
    <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Missed</button>
  )}

  {/* Pending */}
  {!item.cancelled && !item.isCompleted && !item.isAccepted && !isMissedAppointment(item.slotDate, item.slotTime) && (
    <button className='sm:min-w-48 py-2 border border-yellow-500 rounded text-yellow-500 animate-pulse'>Pending</button>
  )}

  {/* Accepted & Paid */}
  {!item.cancelled && item.isAccepted && item.payment && !item.isCompleted && (
    <button className='sm:min-w-48 py-2 border rounded text-stone-500 bg-indigo-50'>Paid</button>
  )}

  {/* Accepted & Not Paid */}
  {!item.cancelled && item.isAccepted && !item.payment && !item.isCompleted && !isMissedAppointment(item.slotDate, item.slotTime) && (
    <button onClick={() => appointmentRazorpay(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
  )}

  {/* Cancel Button */}
  {!item.cancelled && !item.isCompleted && !isMissedAppointment(item.slotDate, item.slotTime) && (
    <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                 )}
                </div>
              </div>
            ))
        ) : (
          <p className='text-center text-zinc-500 py-4'>No active appointments.</p>
          
        )}
          {appointments && appointments.filter(item => item.cancelled).length > 0 && (
        <div className="text-center text-red-500 text-l italic font-extrabold mt-6">
          {appointments.filter(item => item.cancelled).length} Appointment{appointments.filter(item => item.cancelled).length > 1 ? 's' : ''} Cancelled.
        </div>
      )}
      </div>
    </div>
  )
}

export default MyAppointments