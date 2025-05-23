import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const ScrollToTop = () => {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    if (navigationType !== 'POP') { // POP is back/forward button, so ignore if you want
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}

export default ScrollToTop