import React from 'react'
import MenuBar from './menuBar'
import Banner from './banner'
import Swiper from './swiper'
const Home = () => {
  return (
    <div>
      <MenuBar></MenuBar>
      <div className=''>
        <Banner></Banner>
      </div>
      <div className=''>
        <Swiper></Swiper>
      </div>
    </div>
  )
}

export default Home
