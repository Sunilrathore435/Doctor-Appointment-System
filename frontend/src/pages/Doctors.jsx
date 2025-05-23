import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import LoadingAnimation from '../components/LoadingAnimation'

const Doctors = () => {
  const {speciality} = useParams()
  const [filterDoc,setFilterDoc]=useState([])
  const[showFilter,setShowFilter]=useState(false)
  
  const{doctors} = useContext(AppContext)
  const navigate=useNavigate()
   const [loading, setLoading] = useState(true)

  const applyFilter = () => {
    if (doctors && doctors.length > 0) {
      if (speciality) {
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
      } else {
        setFilterDoc(doctors)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  // ✅ Show loading fallback
if (loading) {
  // return (
  //   <div className="flex justify-center items-center min-h-[60vh]">
  //     <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>
  //   </div>
  // );
   return <LoadingAnimation />
}

  // const applyFilter=()=>{
  //   if(speciality){
  //     setFilterDoc(doctors.filter(doc =>doc.speciality === speciality))

  //   }else{
  //   setFilterDoc(doctors)
  // }}

  // useEffect(()=>{
  //    applyFilter();
  // },[doctors,speciality])
 return  (
  <div>
  <p className='text-grey-600'>Browse through the doctors specialist.</p>
  <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
    <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
    <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
      <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
      <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
      <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
      <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
      <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
      <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p>
    </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {/* {
           filterDoc.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm  text-center ${item.available ? 'text-green-500':'text-gray-500'} `}>
                            <p className={`w-2 h-2 ${item.available ? 'bg-green-500' :'bg-gray-500' }  rounded-full`}></p><p>{item.available ? 'Available' :'Not Available'}</p>
                        </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))
          } */}
          {
  filterDoc.length === 0 ? (
<div className="flex flex-col justify-center items-center w-full min-h-[40vh] space-y-4 animate-fadeIn">
  <div className="w-16 h-16 rounded-full bg-red-100 flex justify-center items-center shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-red-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 5.636L5.636 18.364M5.636 5.636l12.728 12.728"
      />
    </svg>
  </div>
  <p className="text-red-600 text-xl font-semibold text-center">
    No doctors found
  </p>
  <p className="text-gray-500 text-sm text-center max-w-xs px-4">
    Try selecting another specialty or check back later for availability.
  </p>
</div>
  ) : (
    filterDoc.map((item, index) => (
      <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
        <img className='bg-blue-50' src={item.image} alt="" />
        <div className='p-4'>
          <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
            <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-gray-500'} rounded-full`}></p>
            <p>{item.available ? 'Available' : 'Not Available'}</p>
          </div>
          <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
          <p className='text-gray-600 text-sm'>{item.speciality}</p>
        </div>
      </div>
    ))
  )
}
        </div>
      </div>
    </div>
  )
}

export default Doctors