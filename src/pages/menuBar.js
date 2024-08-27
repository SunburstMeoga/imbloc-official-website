import React from 'react'

const MenuBar = () => {
    return (
        <div className='w-full fixed top-auto'>
            <div className='w-full bg-white h-4-5 pl-0-5 pr-1-9 flex justify-between items-center'>
                <div className='w-7-9'>
                    <img src='/images/phone/logo.png'></img>
                </div>
                <div className='rounded-xl px-1-2 py-0-2 text-white bg-language-gradient-radial text-1-0 font-semibold'>Eng</div>
            </div>
        </div>
    )
}

export default MenuBar
