import React from 'react'
import Lottie from 'lottie-react'
import livechat from '../assets/livechat.json'  // Adjust the path if needed

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <p className="text-lg font-semibold text-gray-700 animate-pulse">
      Our <span className="text-red-600 font-bold">Doctors</span> are loading, please wait...
      </p>
      <div className="w-40 h-40">
        <Lottie animationData={livechat} loop={true} />
      </div>
    </div>
  )
}


export default LoadingAnimation