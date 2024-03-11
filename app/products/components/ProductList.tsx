'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Product from '@/app/products/components/Product';

const Next = () => {
  const swiper = useSwiper();
  return (
    <button className="text-black text-opacity-100 hover:text-opacity-50 transition-all duration-300 flex items-center justify-center w-12 h-12" onClick={() => swiper.slideNext()}>
      <FaChevronRight className="text-[20px] block" />
    </button>
  );
};

const Prev = () => {
  const swiper = useSwiper();
  return (
    <button className="text-black text-opacity-100 hover:text-opacity-50 transition-all duration-300 flex items-center justify-center w-12 h-12" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="text-[20px] block" />
    </button>
  );
};

export default function ProductList() {
  return (
    <div className="container p-4 md:p-6 my-8">
      <div className="text-center py-4 pb-14">
        <div className="flex items-center justify-center gap-4">
          <span className="w-full border border-gray-200 h-0"></span>
          <h2 className="uppercase text-black mb-2 text-2xl font-bold text-center text-nowrap">Nuevo Productos</h2>
          <span className="w-full border border-gray-200 h-0"></span>
        </div>
        <Link href={'#'} className="uppercase text-gray-500 text-sm border-b-2 border-b-gray-200">
          Ver todos
        </Link>
      </div>

      <Swiper
        className="relative w-full"
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          460: { slidesPerView: 2, spaceBetween: 10 },
          800: { slidesPerView: 3, spaceBetween: 10 },
          980: { slidesPerView: 4, spaceBetween: 10 },
          1280: { slidesPerView: 5, spaceBetween: 10 },
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

        <div className="flex items-center justify-center gap-5 pt-6">
          <Prev />
          <Next />
        </div>
      </Swiper>
    </div>
  );
}
