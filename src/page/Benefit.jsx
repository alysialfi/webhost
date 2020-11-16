import React, { useEffect, useState } from 'react'
import './benefit.scss'
import img_benefit from '../assets/img_benefit.png'

const Benefit = () => {
  
  //variable for placing response from 'api' with empty array initial value
  const [benefitRes, setBenefitRes] = useState([])

  //action after component render
  useEffect(() => {
    //assign function
    getBenefit()
  }, [])

  function getBenefit() {
    //asynchronus function to call api so that not blocking other activities while calling api
    fetch('benefit.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .then((result) => {
        //place result from api to state
        setBenefitRes(result)
      }, (err) => {

      })
  }

  return (
    <>
      <img src={img_benefit} alt="background image" className="bg_benefit" />
      <div className="benefit">
        <div className="benefit-card">
        {/* iterate state that contains api response */}
          {benefitRes.map((ben, id) => (
            <div className="card" key={id}>
              <img src={ben.icon} alt="" />
              <div className="card-text">
                <h3>{ben.title}</h3>
                <h5>{ben.desc}</h5>
              </div>
            </div>
          ))}

        </div>

      </div>
    </>
  )
}

export default Benefit