'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Product from './Product';

const Next = () => {
  const swiper = useSwiper();
  return (
    <button className="  text-gray-300 flex items-center justify-center w-12 h-12 bg-black" onClick={() => swiper.slideNext()}>
      <FaChevronRight className="text-2xl block" />
    </button>
  );
};

const Prev = () => {
  const swiper = useSwiper();
  return (
    <button className=" text-gray-300 flex items-center justify-center w-12 h-12 bg-black" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="text-2xl block" />
    </button>
  );
};

export default function ProductList() {
  return (
    <div className="p-4 w-full">
      <div className="text-center p-4">
        <h2 className="uppercase text-black mb-2 text-3xl font-bold text-center">Nuevo Productos</h2>
        <Link href={'#'} className="uppercase text-gray-500 text-sm border-b-2 border-b-gray-200">
          Ver todos
        </Link>
      </div>

      <Swiper
        className="relative w-full"
        slidesPerView={4}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1280: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>

        <div className="flex items-center justify-center gap-5">
          <Prev />
          <Next />
        </div>
      </Swiper>
    </div>
  );
}
