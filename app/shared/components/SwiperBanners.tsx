'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';

const Next = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 flex items-center justify-center w-14 h-14 bg-black" onClick={() => swiper.slideNext()}>
      <FaChevronRight className="text-4xl block" />
    </button>
  );
};

const Prev = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 flex items-center justify-center w-14 h-14 bg-black" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="text-4xl block" />
    </button>
  );
};

export default function SwiperBanners() {
  return (
    <Swiper className="relative" slidesPerView={1}>
      <SwiperSlide>
        <img className="w-full h-full max-h-[650px]" src="/banner.webp" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full max-h-[650px]" src="/banner-2.webp" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full max-h-[650px]" src="/banner-3.webp" alt="slide1" />
      </SwiperSlide>

      <Prev />
      <Next />
    </Swiper>
  );
}
