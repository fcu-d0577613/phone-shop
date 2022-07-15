import React from 'react'
import Products from '../products/Products'
import News from '../home/News'
import Footer from '../Footer'
import Video from '../home/Video'
import Teacher from '../home/Teacher'
import "../../style/style.css"

const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img src="/images/FCU_GYM.png" className="card-img" alt="..." />
        <div className="card-img-overlay">
          <div className="container">

          {/* <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text laed fs-2">Checkout our new item in the best experience.</p> */}
          </div>
        </div>
      </div>
      <Video />
      <News />
      <Teacher />
      <Footer />
    </div>
  )
}

export default Home