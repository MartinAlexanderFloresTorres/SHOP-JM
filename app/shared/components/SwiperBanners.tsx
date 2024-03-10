'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import Image from 'next/image';
import { ButtonWhiteOutline } from './ui/Buttons';

const Next = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 flex items-center justify-center w-[50px] h-[50px] bg-black" onClick={() => swiper.slideNext()}>
      <FaChevronRight className="text-[20px] block" />
    </button>
  );
};

const Prev = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 text-gray-300 flex items-center justify-center w-[50px] h-[50px] bg-black" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="text-[20px] block" />
    </button>
  );
};

export default function SwiperBanners() {
  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide className="relative">
        <Image width={1200} height={500} priority className="w-full h-full max-h-[650px] object-cover bg-black" src="/presentacion.jpg" alt="slide1" />
        <div className="flex items-center justify-center gap-4 absolute left-1/2 transform -translate-x-1/2 bottom-14 z-20">
          <ButtonWhiteOutline>Hombre</ButtonWhiteOutline>
          <ButtonWhiteOutline>Mujer</ButtonWhiteOutline>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image width={1200} height={500} priority className="w-full h-full max-h-[650px] object-cover bg-black" src="/banner.webp" alt="slide1" />
        <div className="flex items-center justify-center gap-4 absolute left-1/2 transform -translate-x-1/2 bottom-14 z-20">
          <ButtonWhiteOutline>Hombre</ButtonWhiteOutline>
          <ButtonWhiteOutline>Mujer</ButtonWhiteOutline>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image width={1200} height={500} priority className="w-full h-full max-h-[650px] object-cover bg-black" src="/banner-2.webp" alt="slide1" />
        <ButtonWhiteOutline className="absolute left-[22%] bottom-14 z-20">Comprar Ahora</ButtonWhiteOutline>
      </SwiperSlide>
      <SwiperSlide className="relative">
        <Image width={1200} height={500} priority className="w-full h-full max-h-[650px] object-cover bg-black" src="/banner-3.webp" alt="slide1" />
        <ButtonWhiteOutline className="absolute left-1/2 transform -translate-x-1/2 bottom-14 z-20">Comprar Ahora</ButtonWhiteOutline>
      </SwiperSlide>

      <div className="lg:block hidden">
        <Prev />
        <Next />
      </div>
    </Swiper>
  );
}
