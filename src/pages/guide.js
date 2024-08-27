import React from 'react'
const guideItems = [
    { title: 'Safe and reliable', img: '/images/phone/guide-one.png', content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.', terminal: ['icon-anzhuo', 'icon-pingguo', 'icon-windows'], id: 1, stepImg: '/images/phone/step-one.png' },
    { title: 'Register an account', img: '/images/phone/guide-two.png', content: 'Enter your email address Set a secure password Complete verification to register successfully', id: 2, stepImg: '/images/phone/step-two.png' },
    { title: 'Start chatting', img: '/images/phone/guide-three.png', content: 'After logging in to your account, you can start safe and free chatting with your friends.', id: 3, stepImg: '/images/phone/step-three.png' },
]
const Guide = () => {
    return (
        <div className='pt-3-7 flex flex-col justify-start items-center bg-reason-module'>
            <div className='max-w-fit bg-clip-text text-transparent bg-language-gradient-radial text-2-5 font-bold leading-3-0'>User guide and</div>
            <div className='font-bold text-2-5 text-module-word leading-3-0'>registration</div>
            <div className='font-bold text-2-5 text-module-word leading-3-0 mb-2-0'>process</div>
            <div className='w-full px-2-3 flex flex-col justify-start items-center'>
                {guideItems.map((item, index) => {
                    return <div key={index} className='border-l-2 border-guide-border relative pb-2-0 flex flex-col justify-start items-start'>
                        <div className='absolute top-0-1 -left-1-9 w-3-9'>
                            <img src={item.stepImg} alt=''></img>
                        </div>
                        <div className='w-full pl-3-2 flex flex-col justify-start items-start mt-0-4'>
                            <div className='w-15-3 mb-1-4'>
                                <img src={item.img}></img>
                            </div>
                            <div className='text-1-5 font-bold mb-1-4 text-module-word'>{item.title}</div>
                            {item.terminal && item.terminal.length !== 0 && <div className='flex justify-start items-center mb-1-2'>
                                {item.terminal.map((_item, _index) => {
                                    return <div key={_index} className='mr-1-2 rounded-full h-2-5 w-2-5 bg-guide-method  flex justify-center items-center tex-white'>
                                        <div className={`icon iconfont text-1-2 ${_item}`}></div>
                                    </div>
                                })}
                            </div>}
                            <div className='text-1-0 text-core-word leading-1-0'>
                                {item.content}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Guide
