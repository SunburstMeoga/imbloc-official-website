import React, { useState } from 'react'
const futureItems = [
    { showMore: false, id: 1, title: 'User personalized customization', icon: 'icon-rocket', content: "Allow users to carry out personalized customization to meet the preferences and needs of different users. For example, it provides a variety of themes, backgrounds, fonts and other options to allow users to customize the chat interface and enhance the user's sense of belonging and personalized experience." },
    { showMore: false, id: 2, title: 'Function expansion and innovation', icon: 'icon-emizhifeiji', content: "Continuously carry out functional expansion and innovation to meet the changing needs of users. For example, voice chat, video chat, file transfer and other functions are introduced to improve user experience and diversity." },
    { showMore: false, id: 3, title: 'Integrate ecosystems and partners', icon: 'icon-kongyun', content: "Integrate with other decentralized applications and platforms to form a larger ecosystem. For example, digital wallets, decentralized social platforms, etc. can realize the complementation and integration of more functions and provide richer services and experiences." },
]
const Future = () => {
    let [futureList, changeFutureList] = useState(futureItems)
    // let [currentFuture, ]
    const handleShowMore = (id) => {
        console.log(id)
        changeFutureList(futureList.map(item =>
            item.id === id ? { ...item, showMore: !item.showMore } : item
        ));
    }
    return (
        <div className='bg-reason-module flex flex-col justify-start items-center pt-2-0 '>
            <div className='text-center text-2-8 font-bold  lg:flex lg:justify-center lg:items-center lg:mb-4-8'>
                <div className='flex justify-center w-full'>
                    <div className='bg-clip-text text-transparent bg-language-gradient-radial leading-2-2  max-con max-w-fit'>Future</div>
                </div>
                <div className='w-full  text-module-word lg:ml-1-0'>outlook</div>
            </div>
            <div className='w-full px-2-8 flex flex-col justify-start items-center lg:px-1-3 lg:flex-row lg:justify-between lg:items-center'>
                {futureList.map((item, index) => {
                    return <div key={index} onClick={() => handleShowMore(item.id)} className={`bg-white w-full py-3-3 flex flex-col justify-start items-center rounded-3xl transition  duration-300 overflow-hidden mb-1-7 border-4 ${item.showMore ? ' border-module-word active:bg-slate-200' : 'border-transparent'} lg:w-19-6 lg:h-51-0 lg:mb-5-8`}>
                        <div className='w-8-3 h-8-3 bg-no-repeat bg-future-item flex justify-center items-center mb-3-0 '>
                            <div className={`icon iconfont  text-3-2 -mt-0-9 transition  duration-300 ${item.showMore ? 'bg-clip-text text-transparent bg-language-gradient-radial' : 'text-black'} ${item.icon} ${item.id === 1 ? 'rotate-45' : ''}`}></div>
                        </div>
                        <div className='text-module-word text-1-5 leading-1-8 font-bold mb-1-6 text-center w-15-2'>{item.title}</div>
                        <div className='w-full flex justify-center items-center lg:hidden'>
                            <div className={`icon iconfont icon-up bg-clip-text text-transparent bg-language-gradient-radial text-2-0 transition  duration-300 ${!item.showMore ? 'rotate-180' : 'rotate-0'}`}></div>
                        </div>
                        {item.showMore && <div className='text-module-word text-1-0 leading-2-0 font-medium w-14-8 text-center mt-1-6 lg:hidden'>{item.content}</div>}
                        <div className='hidden  text-module-word text-1-0 leading-2-0 font-medium w-14-8 text-center mt-1-6 lg:block'>{item.content}</div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Future
