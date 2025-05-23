import React from 'react'
import Lottie from 'lottie-react'
import livechat from '../assets/livechat.json'  // Adjust the path if needed

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
    <p className="text-center text-xl sm:text-2xl font-semibold text-gray-700 animate-pulse">
  Please hold on while we load <span className="text-red-600 font-bold">our doctors</span> for you...
</p>
      <div className="w-40 h-40">
        <Lottie animationData={livechat} loop={true} />
      </div>
    </div>
  )
}


export default LoadingAnimation