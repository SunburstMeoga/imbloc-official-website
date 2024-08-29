import React from 'react'

const Banner = () => {
    return (
        <div className='w-full bg-no-repeat bg-cover bg-phone-module-banner pt-11-5 flex flex-col justify-start items-center text-white h-42-0 lg:bg-pad-module-banner lg:h-40-5 lg:pt-10-8 xl:bg-pc-module-banner xl:h-62-2 xl:pt-10-7'>
            <div className='px-2-8 text-2-5 text-center font-bold leading-2-8 mb-1-6 lg:text-3-0 lg:leading-3-2 lg:px-9-8 lg:mb-2-3 xl:text-6-0 xl:mb-2-3 xl:leading-6-0'>
                Free, Secure & Decentralized <br className='hidden xl:block'></br> Chat Platform
            </div>
            <div className='text-1-5 text-center leading-2-0 w-full font-medium lg:text-1-2 lg:leading-1-6'>
                Lorem Ipsum is simply <br className='lg:hidden'></br> dummy text <br className='hidden lg:block xl:hidden'></br> of the printing <br className='lg:hidden'></br> and setting indus orem <br className='lg:hidden xl:block'></br> Ipsum has <br className='hidden lg:block xl:hidden'></br> been the <br className='lg:hidden'></br> industrys  standard <br className='lg:hidden'></br> dummy text ever.
            </div>
        </div>
    )
}

export default Banner
