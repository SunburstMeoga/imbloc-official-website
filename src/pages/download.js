import React from 'react'
const downloadItems = [
    { icon: 'icon-phone', title: 'App Store', content: 'Available on the', id: 1 },
    { icon: 'icon-google-play', title: 'Google Play', content: 'Android APP on', id: 2 },
]
const Download = () => {
    return (
        <div className='w-full flex flex-col justify-start items-center px-2-8'>
            {downloadItems.map((item, index) => {
                return <div key={index} className={`bg-language-gradient-radial rounded-xl w-full h-5-1  flex justify-center  items-center text-white ${item.id === 1 ? 'mb-0-9' : ''}`}>
                    <div className={`icon iconfont mr-1-0 text-2-0 ${item.icon}`}></div>
                    <div className='h-2-2 flex flex-col justify-center'>
                        <div className='text-0-8'>{item.content}</div>
                        <div className='text-1-2'>{item.title}</div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Download
