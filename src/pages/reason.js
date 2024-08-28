import React from 'react';
const reasonItems = [
    { title: 'Safe and reliable', content: 'Lorem Ipsum is simply dummy text of the printing and typese tting indus orem Ipsum has beenthe standard dummy.', },
    { title: 'Excellent experience', content: 'Not relying on advertising and promotion for profit, the page is purer and the experience is simpler.', },
    { title: 'Data self-determination', content: 'Data is autonomous and controllable, providing a safe and decentralized data storage method.', },

]
const Reason = () => {
    return (
        <div className='bg-reason-module pt-2-2 flex flex-col justify-start items-center lg:flex-row lg:flex-wrap'>
            <div className='w-full px-2-8 lg:px-4-8 lg:order-1'>
                <div className='w-full text-2-8 text-module-word font-bold'>Why choose</div>
                <div className='flex justify-start w-full mb-1-5'>
                    <div className='bg-clip-text text-transparent bg-language-gradient-radial w-full text-2-8 font-bold max-con max-w-fit'>IMbloc</div>
                </div>
            </div>
            {/* <div className='w-full aspect-w-1 aspect-h-1 bg-white rounded-full flex items-center justify-center mb-2-8 lg:order-3 lg:w-30-0 lg:h-30-0'>
                <div className=' flex justify-center items-center '>
                    <img src='/images/phone/reason-banner.png' className='w-20-9 lg:w-24-8'></img>
                </div>
            </div> */}
            <div className='w-23-0 h-23-0 border border-red-500 rounded-full mb-2-8 lg:order-3 lg:-mt-10-0 lg:w-31-0 lg:h-31-7'></div>
            <div className='flex flex-col justify-start items-center px-1-7 lg:order-2 lg:px-3-8 lg:mt-2-0'>
                {reasonItems.map((item, index) => {
                    return <div key={index} className='flex justify-between items-start w-full mb-2-7'>
                        <div className='w-2-0 h-2-0 rounded-full bg-reason-right flex justify-center items-center'>
                            <div className='icon iconfont icon-right text-1-0 text-white'></div>
                        </div>
                        <div className='ml-1-3 w-16-8 lg:w-20-3'>
                            <div className='text-module-word text-1-5 mb-1-0 font-bold h-2-0 flex justify-start items-center '>{item.title}</div>
                            <div className='text-1-0 font-medium text-core-word leading-1-2'>{item.content}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Reason;
