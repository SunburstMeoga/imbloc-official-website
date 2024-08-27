import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/effect-coverflow';
// Images for the slider
const images = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
];
const SwiperCard = () => {
  return (
    <div className="swiper-container" style={{ width: '100%', height: '400px', margin: '0 auto' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide style={{ width: '100%', height: '400px', margin: '0 auto' }} key={index}>
            <img src={img} alt={`Slide ${index}`} style={{ width: '100%', borderRadius: '10px' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperCard
