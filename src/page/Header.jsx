import React from 'react'
import people from '../assets/person_header.png'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  const logo = [
    "https://static.domainesia.com/assets/images/icons/cf-optimized-partner-badge.png",
    "https://static.domainesia.com/assets/images/icons/php.png",
    "https://static.domainesia.com/assets/images/icons/python.png",
    "https://static.domainesia.com/assets/images/icons/nodejs.png",
    "https://static.domainesia.com/assets/images/icons/letsencrypt.png",
    "https://static.domainesia.com/assets/images/icons/memcached.png",
    "https://static.domainesia.com/assets/images/icons/intel.png",
    "https://static.domainesia.com/assets/images/icons/mysql.png",
    "https://static.domainesia.com/assets/images/icons/cloudlinux.png",
    "https://static.domainesia.com/assets/images/icons/bitninja.png",
    "https://static.domainesia.com/assets/images/icons/kvm.png",
    "https://static.domainesia.com/assets/images/icons/cpanel.png",
    "https://static.domainesia.com/assets/images/icons/mailchannels.png"
  ]

  return (
    <>
      <div className="header">
        <div className="header-left">
          <img src={people} alt="background" className="img-left" />
        </div>
        <div className="header-right">
          <header>
            <h1>Web Hosting dengan Pelayanan Terbaik</h1>
            <h4>Kami siap 24 jam dengan pelayanan maksimal untuk memastikan Web Anda siap dilihat dunia!</h4>
          </header>
          <div className="search-div">
            <div className="icon-div">
              <FontAwesomeIcon icon={faSearch} className='icon-search' />
            </div>
            <input type="text" name="search" placeholder="cari domain untuk website Anda" />

            <div className="technology-div">
              {/* iterate logo array */}
              {logo.map((img, id) => (
                <div className="tech-img" key={id}>
                  <img src={img} alt="logo technology" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default Header 
