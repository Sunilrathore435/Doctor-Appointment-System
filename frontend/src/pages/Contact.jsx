import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-500 font-medium' >US</span> </p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6 md:w-2/4 text-sm text-gray-600'>
          <b>OUR OFFICE</b>
          <p>Tech-Clinic <br /> BHOPAL, MP, INDIA</p>
          <p>Tel: (415) 555‑0132 <br /> Email: Tech_clinic@gmail.com</p>
          <b>CAREERS AT TECH-CLINIC</b>
          <p>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        {/* <b>MEET OUR TEAM</b> */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-pulse">
          MEET OUR TEAM
        </h2>
      </div>
      <div className="flex items-center justify-center  bg-white">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">

          {/* Team Member 1 */}
          <div className="max-w-[250px] w-full  rounded-2xl overflow-hidden cursor-pointer hover:shadow-black hover:translate-y-[-10px] shadow-lg transition-all duration-500">
            <img className="w-full h-auto object-cover" src={assets.Team1} alt="Team Member" />
            <div className="p-4 text-center">
              <p className="text-gray-600 text-lg font-bold">Sunil Rathore</p>
              <p className="text-gray-600 text-sm font-sans">Group Leader</p>
              <p className="text-gray-600 text-sm font-sans">Full Stack Developer</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="max-w-[250px] w-full  rounded-2xl overflow-hidden cursor-pointer hover:shadow-black hover:translate-y-[-10px] shadow-lg transition-all duration-500">
            <img className="w-full h-auto object-cover" src={assets.Team2} alt="" />
            <div className="p-4 text-center">
              <p className="text-gray-600 text-lg font-bold">Vivek Agrawal</p>
              <p className="text-gray-600 text-sm font-sans">Group Member</p>
              <p className="text-gray-600 text-sm font-sans">Back End Developer & UI</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="max-w-[250px] w-full  rounded-2xl overflow-hidden cursor-pointer hover:shadow-black hover:translate-y-[-10px] shadow-lg transition-all duration-500">
            <img className="w-full h-auto object-cover" src={assets.Team3} alt="" />
            <div className="p-4 text-center">
              <p className="text-gray-600 text-lg font-bold">Shivam Sahu</p>
              <p className="text-gray-600 text-sm font-sans">Group Member</p>
              <p className="text-gray-600 text-sm font-sans">Back End Developer</p>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="max-w-[250px] w-full  rounded-2xl overflow-hidden cursor-pointer hover:shadow-black hover:translate-y-[-10px] shadow-lg transition-all duration-500">
            <img className="w-full h-auto object-cover" src={assets.Team4} alt="" />
            <div className="p-4 text-center">
              <p className="text-gray-600 text-lg font-bold">Manish Dangi</p>
              <p className="text-gray-600 text-sm font-sans">Group Member</p>
              <p className="text-gray-600 text-sm font-sans">User Experience Designer</p>
            </div>
          </div>

        </div>
      </div>
        <div className="mt-12 flex justify-center items-center">
  <p className="text-gray-700 text-center text-lg font-medium max-w-xl animate-fadeIn">
    Thank you for taking the time to meet our team. We appreciate your interest and look forward to connecting with you!
  </p>
</div>
    </div>
  )
}

export default Contact