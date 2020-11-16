import React, { useState, useEffect } from 'react'
import './product.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const Product = () => {

  //variable for placing response from 'api' with empty array initial value
  const [productRes, setProductRes] = useState([])

  //action after component render
  useEffect(() => {
    //assign function
    getProduct()

  }, [])

  function getProduct() {
    //asynchronus function to call api so that not blocking other activities while calling api
    fetch('product.json'
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
        setProductRes(result)
      }, (err) => {

      })
  }

  return (
    // define schema markup
    <div className="product" itemScope itemType="https://schema.org/Product">
    <h1>Paket Web Hosting</h1>
      <article>
        <p className="product-subtitle">Pilih paket hosting yang sesuai untuk kebutuhan. Beli sekarang untuk mendapatkan penawaran spesial untuk setiap paket hosting. Kami tunggu karya Anda</p>
      </article>
      <div className="product-card">
        {/* iterate state that contains api response */}
        {productRes.map((prod, id) => (
          <div className="card">
            <div className="card-header">
              <h2 itemProp="name">{prod.title}</h2>
            </div>
            <div className="price">
              <h5 itemProp="priceCurrency" content="RP">Rp</h5>
              <h1 itemProp="price">{prod.price}</h1>
              <h4>/bulan</h4>
            </div>
            <div className="card-body">
              <ul>
                {prod.features.map((ft, id) => (
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className='icon-check' />
                    <p className="name" itemProp="description">{ft}</p>
                    {/* <hr /> */}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-footer">
              <button type="submit">Beli Sekarang</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Product