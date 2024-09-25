import React from 'react'
const downloadItems = [
    { icon: 'icon-phone', title: 'App Store', content: 'Available on the', id: 1 },
    { icon: 'icon-google-play', title: 'Google Play', content: 'Android APP on', id: 2 },
]
const socialItems = [
    { icon: 'icon-tuite' },
    { icon: 'icon-instagram-fill' },
    { icon: 'icon-in' },
    { icon: 'icon-discord' },

]
const Footer = () => {
    return (
        <div className='w-full bg-footer-gradient-radial pt-3-3'>
            <div className='xl:w-74-8 xl:mx-auto'>
                <div className='px-1-2 lg:flex lg:flex-row lg:justify-between lg:items-center xl:px-0-1'>
                    <div className='w-full mb-2-2 lg:mb-auto'>
                        <div className='w-8-7 lg:w-12-7 '>
                            <img src='/images/phone/logo-white.png'></img>
                        </div>
                    </div>
                    <div className='px-2-4 w-full text-white text-1-5 leading-1-8 mb-1-5  lg:mt-2-0 lg:text-right lg:font-bold'>Let's Try Out</div>
                </div>
                <div className='w-full flex flex-col justify-start items-center px-2-8 mb-11-2 lg:items-end lg:mb-2-0 xl:px-0-1'>
                    {downloadItems.map((item, index) => {
                        return <div key={index} className={`bg-language-gradient-radial rounded-xl w-full h-4-5  flex justify-center  items-center text-white ${item.id === 1 ? 'mb-2-0' : ''} lg:w-12-2`}>
                            <div className={`icon iconfont mr-1-0 text-2-0 ${item.icon}`}></div>
                            <div className='h-2-2 flex flex-col justify-center'>
                                <div className='text-0-8'>{item.content}</div>
                                <div className='text-1-2'>{item.title}</div>
                            </div>
                        </div>
                    })}
                </div>
                <div className='w-full px-2-4 flex justify-between items-center mb-3-2  lg:w-26-2 xl:px-0-1'>
                    {socialItems.map((item, index) => {
                        return <div key={index} className={`text-2-4 icon iconfont text-white ${item.icon}`}></div>
                    })}
                </div>
            </div>
            <div className='w-full bg-language-gradient-radial'>
                <div className=' text-white text-1-0 flex justify-center items-center lg:justify-between lg:px-3-8 lg:h-7-0 xl:px-0-1 xl:w-74-8 xl:mx-auto'>
                    {/* <div className='lg:order-2'>Design & developed by Link Here</div> */}
                    <div className='hidden lg:block lg:order-1'>© Copyrights 2024. All rights reserved.</div>
                </div>
                <div className='w-full h-4-8 text-white text-1-0 flex justify-center items-center lg:hidden'>© Copyrights 2024. All rights reserved.</div>
            </div>
        </div>
    )
}

export default Footer
