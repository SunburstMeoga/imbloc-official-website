import React from 'react'
const coreItems = [
    { id: 1, title: 'Registration and authentication', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has.', tips: 'Lorem Ipsum is simply dummy text', img: '/images/phone/core-one.png' },
    { id: 2, title: 'Profile management', content: 'Allows users to edit and manage personal information, including avatar, nickname, personal profile, etc.', tips: '', img: '/images/phone/core-two.png' },
    { id: 3, title: 'Instant messaging', content: 'Supports real-time point-to-point or group chat function, users can send and receive instant messages.', tips: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has', img: '/images/phone/core-three.png' },

]
const Core = () => {
    return (
        <div className='w-full bg-white pt-3-6 rounded-3xl flex flex-col justify-start items-center text-module-word lg:rounded-none lg:pt-2-7 xl:pt-5-4  xl:rounded-3xl xl:w-85-6 xl:mx-auto'>
            <div className='flex flex-col justify-start items-center lg:flex-row text-2-5 lg:text-2-8 lg:justify-center xl:mb-1-0'>
                <div className='bg-clip-text text-transparent bg-language-gradient-radial font-bold'>IMbloc</div>
                <div className='font-bold mb-1-0 lg:mb-auto lg:ml-1-0'>core functions</div>
            </div>
            <div className='w-full px-2-0 text-1-2 text-center  mb-3-0 lg:text-1-5 lg:px-5-7'>
                Lorem Ipsum is simply dummy <br className='lg:hidden'></br> text of the printing and typese <br></br> tting indus orem Ipsum has <br className='lg:hidden'></br> beenthe standard dummy.
            </div>
            <div className='w-full px-3-4 flex flex-col justify-start items-center lg:px-1-2 lg:flex-row lg:justify-between xl:px-4-0'>
                {coreItems.map((item, index) => {
                    return <div key={index} className='rounded-2xl overflow-hidden w-full mb-3-0 lg:w-19-4 lg:mb-4-6 xl:w-22-6' >
                        <div className='bg-core-items w-full h-19-4 flex justify-center items-center relative'>
                            <div className='absolute w-full h-19-4 bg-white078'></div>
                            <div className='w-full h-19-4 flex flex-col justify-end items-center relative z-10'>
                                <img src={item.img} alt=''></img>
                            </div>
                            {item.tips && <div className='rounded-xl bg-white text-core-word text-0-7 w-10-0 py-0-7 leading-1-0 absolute bottom-2-0 right-0-8 z-20 px-0-9 shadow-2xl'>{item.tips}</div>}
                        </div>
                        <div className='w-full py-1-2 px-1-7 bg-module-white '>
                            <div className='text-1-2 font-bold text-module-word mb-0-4 leading-1-5 lg:w-10-0'>{item.title}</div>
                            <div className='text-0-9 leading-1-4 text-core-word'>{item.content}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Core
