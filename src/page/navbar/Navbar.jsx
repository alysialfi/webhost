import React, {useState, useEffect} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  //initialize variable a.k.a state that will trigger the spesific componnet to re-render only when get changed
  const [scroll, setScroll] = useState('')
  const [shadow, setShadow] = useState('')

  //action after component render
  useEffect(() => {
    //update the navbar color and shadow on scroll trigger
    document.addEventListener("scroll", e => {
      
      const bgColor = window.scrollY > 100 ? 'white' : 'transparent'
      setScroll(bgColor)

      const addShadow = window.scrollY > 100 ? '0 0 18px rgba(0, 0, 0, .2)' : ''
      setShadow(addShadow)
    })
  }, [])

  return (
      <nav className="navbar" style={{background: scroll, transition:'.3s', boxShadow: shadow}}> 
        <div className="navbar-logo">
          <img src={logo} alt=""/>
        </div>
        <div className="navbar-menu">
          <p>Hosting</p>
          <p>Domain</p>
          <p>Website</p>
          <p>Promo</p>
          <p>Daftar</p>
          <p>Login</p>
        </div>
      </nav>
  )
}

export default Navbar
