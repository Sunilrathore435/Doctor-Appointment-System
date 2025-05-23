import React from 'react'
import Lottie from 'lottie-react'
import livechat from '../assets/livechat.json'  // Adjust the path if needed

const LoadingAnimation = () => {
return (
    <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
      <Lottie animationData={livechat} loop={true} className="w-48 h-48" />
      <p className="text-center text-xl sm:text-2xl font-semibold text-gray-700 animate-pulse">
        Please hold on while we load <span className="text-red-600 font-bold">our doctors</span> for you...
      </p>
    </div>
  )
}

export default LoadingAnimation