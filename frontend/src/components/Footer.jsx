import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ------- Left Section -------*/}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>The Doctor Appointment System streamlines appointment booking for patients and providers, offering online scheduling, rescheduling, and reminders. Developed by the Tech-Clinic Team, it reduces wait times, minimizes errors, and enhances efficiency. This system allows doctors to focus more on patient care by automating administrative tasks. Additionally, it improves patient satisfaction through a seamless, user-friendly interface and ensures better time management for healthcare professionals.</p>

                </div>

                {/* ------- Center Section -------*/}
                <div className=' pt-5'>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600 cursor-pointer'>
                        <NavLink to='/' >
                            <li >Home</li>
                        </NavLink>
                        <NavLink to='/about' >
                            <li>About us</li>
                        </NavLink>
                        <NavLink to='/contact'>
                            <li>Contact us</li>
                        </NavLink>
                        <li>#Privacy policy</li>
                    </ul>

                </div>

                {/* ------- Right Section -------*/}
                <div className=' pt-5'>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91 25645456214</li>
                        <li>Team_Techclinic@gmail.com</li>
                    </ul>

                </div>
            </div>
            {/* ------- Copyright Text ------- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright © 2024 Doctor Appointmnent - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer