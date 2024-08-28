import React from 'react'
const advantageItems = [
    { img: '/images/phone/advantage-one.png', title: 'Download', amount: '17', unit: ' M+', id: 1 },
    { img: '/images/phone/advantage-two.png', title: 'Follwers', amount: '90', unit: ' M+', id: 2 },
    { img: '/images/phone/advantage-three.png', title: 'Reviews', amount: '2400', unit: ' +', id: 3 },
    { img: '/images/phone/advantage-four.png', title: 'Countries', amount: '150', unit: ' +', id: 4 },
]
const Advantage = () => {
    return (
        <div className='w-full flex justify-between items-center flex-row flex-wrap px-2-7 lg:px-6-6'>
            {advantageItems.map((item, index) => {
                return <div key={index} className={`flex flex-col justify-start items-center w-8-7 ${item.id !== 2 || item.id !== 1 ? 'mb-1-8' : ''}`}>
                    <div className='w-3-6 h-3-6 rounded-full bg-white flex justify-center items-center mb-0-1'>
                        <img className='w-1-5' src={item.img}></img>
                    </div>
                    <div className='font-bold text-2-5 mb-0-0 bg-clip-text text-transparent bg-language-gradient-radial'>{item.amount} {item.unit}</div>
                    <div className='font-bold text-1-2 bg-clip-text text-transparent bg-language-gradient-radial'>{item.title}</div>
                </div>
            })}
        </div>
    )
}

export default Advantage
