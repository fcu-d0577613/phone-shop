import React from 'react'
import Products from '../products/Products'
import News from '../home/News'
import Footer from '../Footer'
import Video from '../home/Video'
import Teacher from '../home/Teacher'
import "../../style/style.css";

const Home = () => {
  return (
    <div className='hero mainBG text-light'>
      <div className=" card    border-0">
        <img src={"images/FCU_GYM.png"} className="card-img homeBigImg" alt="..." />
        
      </div>
      <Video />
      <News />
      <Teacher />
      <Footer />
    </div>
  )
}

export default Home