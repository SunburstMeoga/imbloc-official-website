import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'; // 引入 Autoplay 模块
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';

// Images for the slider
const images = [
  "/images/phone/swiper-one.png",
  "/images/phone/swiper-two.png",
  "/images/phone/swiper-three.png",
  "/images/phone/swiper-four.png",
  "/images/phone/swiper-five.png",
];

const SwiperCard = () => {
  return (
    <>
      <div className="lg:hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{ // 配置自动播放
            delay: 2500, // 每张幻灯片的停留时间（毫秒）
            disableOnInteraction: false, // 用户交互后是否停止自动播放
          }}
          coverflowEffect={{
            depth: 100,
            stretch: 0,
            modifier: 1,
            rotate: 50,
            scale: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[EffectCoverflow, Autoplay]} // 添加 Autoplay 模块
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ width: '213px' }}>
              <img className='w-full' src={img} alt={`Slide ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='hidden lg:flex lg:justify-center lg:items-center lg:px-2-0 xl:hidden'>
        <img src="/images/pad/pad-slider-banner.png" alt=''></img>
      </div>
      <div className='hidden xl:flex xl:justify-center xl:items-center lg:px-13-2'>
        <img src="/images/pc/pc-slider-banner.png" alt=''></img>
      </div>
    </>
  );
}

export default SwiperCard;
