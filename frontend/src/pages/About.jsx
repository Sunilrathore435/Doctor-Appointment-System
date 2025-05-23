import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
 

  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-800'>
          <p className='text-gray-800 font-semibold'>ABOUT <span className='text-gray-800 font-semibold'>US</span> </p>
        </div>

          <div className='my-10 flex flex-col md:flex-row gap-12' >
              <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
                <p>Welcome to Doctor Appointment System, your reliable partner in streamlining the doctor appointment process. At Doctor Appointment System, we recognize the complexities and frustrations that can arise when trying to schedule appointments with healthcare providers and manage your medical visits efficiently.</p>
                <p>Doctor Appointment System is dedicated to revolutionizing the healthcare experience through innovative technology. Our platform is designed to simplify the appointment booking process, making it easier for patients to connect with doctors and access the care they need. Whether you’re a first-time patient or a returning visitor, Doctor Appointment System is here to support you every step of the way.</p>
                <b className='text-gray-800 text-xl'>Our Vision</b>
                <p>Our vision at Doctor Appointment System is to create a hassle-free healthcare experience for every patient. We aim to bridge the gap between individuals and healthcare providers, ensuring that access to medical care is straightforward and efficient. Our goal is to empower patients to take charge of their health by providing them with the tools they need to manage their appointments seamlessly.</p>
                <b className='text-gray-800 text-xl'>Our Mission</b>
                <p>At Doctor Appointment System, our mission is to enhance patient engagement and satisfaction by offering a user-friendly platform for scheduling doctor appointments. We believe that everyone deserves easy access to healthcare services, and we strive to eliminate barriers that prevent timely medical attention. Our commitment is to provide an intuitive experience that allows patients to focus on their health, rather than the logistics of scheduling.</p>
              </div>
         </div> 
         <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Why Choose Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">                                                                                                                                                                                                                                                                                                                                                                                                                           
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <h2 className="text-xl font-semibold">Efficiency</h2>
          <p>Our streamlined booking process minimizes wait times and simplifies appointment scheduling.</p>
        </motion.div>
        
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg transform transition-transform  hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold">Convenience</h2>
          <p>Access our platform anytime, anywhere, with features like telemedicine options and automated reminders.</p>
        </motion.div>
        
        <motion.div
          className="bg-white p-4 rounded-lg shadow-lg transform transition-transform hover:bg-primary hover:text-white hover:scale-105 cursor-pointer"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold">Personalization</h2>
          <p>Enjoy tailored provider recommendations based on your unique health needs and preferences.</p>
        </motion.div>
      </div>
    </div>
  

    </div>

  )}


export default About