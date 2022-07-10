import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
      <div className="card bg-dark text-white border-0">
        <img src="assets/images/home/pexels-sergio-souza-3772315.jpg" className="card-img" alt="..." height="550px"/>
        <div className="card-img-overlay">
          <div className="container">

          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
          <p className="card-text laed fs-2">Checkout our new item in the best experience.</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  )
}

export default Home