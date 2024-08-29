import React from 'react'

const MenuBar = () => {
    return (
        <div className='w-full fixed top-auto z-50'>
            <div className='w-full bg-white h-4-5 pl-0-5 pr-1-9 flex justify-between items-center lg:h-8-4 lg:bg-transparent xl:h-6-4'>
                <div className='w-7-9 lg:w-9-8'>
                    <img src='/images/phone/logo.png'></img>
                </div>
                <div className='rounded-xl px-1-2 py-0-2 text-white bg-language-gradient-radial text-1-0 font-semibold lg:hidden'>Eng</div>
                <div className='rounded-full cursor-pointer w-10-8 h-3-3 hidden lg:flex justify-center items-center bg-white text-module-word text-1-2  xl:w-10-8 xl:h-3-3 xl:text-1-3'>ENG / 中文</div>
            </div>
        </div>
    )
}

export default MenuBar
