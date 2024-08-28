import React from 'react'
import MenuBar from './menuBar'
import Banner from './banner'
import Swiper from './swiper'
import Download from './download'
import Advantage from './advantage'
import Core from './core'
import Reason from './reason'
import Guide from './guide'
import Future from './future'
import Footer from './footer'
const Home = () => {
  return (
    <div className='bg-reason-module'>
      <MenuBar></MenuBar>
      <div className=''>
        <Banner></Banner>
      </div>
      <div className='-mt-7-6 mb-1-5 lg:-mt-13-2 lg:mb-5-0'>
        <Swiper></Swiper>
      </div>
      <div className='mb-3-9 lg:mb-5-2'>
        <Download></Download>
      </div>
      <div className='mb-2-8 '>
        <Advantage></Advantage>
      </div>
      <div className=''>
        <Core></Core>
      </div>
      <div className=''>
        <Reason></Reason>
      </div>
      <div className=''>
        <Guide></Guide>
      </div>
      <div className='pb-1-7'>
        <Future></Future>
      </div>
      <div className=''>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
