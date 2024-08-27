import React from 'react'
import MenuBar from './menuBar'
import Banner from './banner'
import Swiper from './swiper'
import Download from './download'
import Advantage from './advantage'
const Home = () => {
  return (
    <div className='bg-module-white'>
      <MenuBar></MenuBar>
      <div className=''>
        <Banner></Banner>
      </div>
      <div className='-mt-7-6 mb-1-5'>
        <Swiper></Swiper>
      </div>
      <div className='mb-3-9'>
        <Download></Download>
      </div>
      <div className=''>
        <Advantage></Advantage>
      </div>
    </div>
  )
}

export default Home
