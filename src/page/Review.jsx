import React, { useState, useEffect } from 'react'
import './review.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img_review from '../assets/img_review.png'

const Review = () => {

  //variable for placing response from 'api' with empty array initial value
  const [reviewRes, setReviewRes] = useState([])

  //action after component render
  useEffect(() => {
    //assign function
    getReview()
  }, [])

  async function getReview() {
    //asynchronus function to call api so that not blocking other activities while calling api
    fetch('review.json'
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
        setReviewRes(result)
      }, (err) => {

      })
  }

  //carousel responsive breakpoint option
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      // define schema markup
      <div className="review" itemProp="review" itemScope itemType="https://schema.org/Review">
        <h1>Review Pengguna</h1>
        <div className="testimoni">
          <Carousel
            ssr={true}
            infinite={true}
            containerClass="carousel-container"
            partialVisbile
            itemClass="image-item"
            swipeable={true}
            draggable={true}
            responsive={responsive}
          >
        {/* iterate state that contains api response */}
            {reviewRes.map((rev, id) => (<div className="testimoni-card">
              <section className="card">
                <h3 itemProp="author">{rev.name}</h3>
                <p itemProp="reviewBody">{rev.comments}</p>
              </section>
              <div className="card-profile">
                <img src={rev.pic} alt="" />
              </div>
            </div>
            ))}
          </Carousel>
        </div>
        <div className="bg-review">
          <img src={img_review} alt="" className="img-review" />
        </div>
      </div>
  )
}

export default Review