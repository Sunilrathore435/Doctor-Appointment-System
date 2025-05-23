// import React from 'react'
// import Header from '../components/Header'
// import SpecialityMenu from '../components/SpecialityMenu'
// import TopDoctors from '../components/TopDoctors'
// import Banner from '../components/Banner'


// const Home = () => {
//   return (
//     <div>
//       <Header/>
//       <SpecialityMenu/>
//    <TopDoctors/>
//    <Banner/>
//     </div>
//   )
// }

// export default Home
import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import { AppContext } from '../context/AppContext'

const Home = () => {
  const { token } = useContext(AppContext)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    // Token from context or localStorage
    const savedToken = token || localStorage.getItem('token')
    setIsLoggedIn(!!savedToken) // true if token exists
  }, [token])

  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      {/* Show Banner only if not logged in */}
      {!isLoggedIn && <Banner />}
    </div>
  )
}

export default Home