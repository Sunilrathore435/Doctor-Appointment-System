import React from 'react'
import Lottie from 'lottie-react'
import livechat from '../assets/livechat.json'  // Adjust the path if needed

const LoadingAnimation = () => {
    return (
    <Lottie 
      animationData={livechat} 
      loop={true} 
      style={{ width: 200, height: 200, margin: 'auto' }} 
    />
  )
}

export default LoadingAnimation