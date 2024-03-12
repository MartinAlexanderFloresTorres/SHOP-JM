'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

const Next = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute right-1 top-1/2 transform -translate-y-1/2 z-20 text-gray-400 flex items-center justify-center w-10 h-10 bg-white" onClick={() => swiper.slideNext()}>
      <FaChevronRight className="text-[16px] block" />
    </button>
  );
};

const Prev = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute left-1 top-1/2 transform -translate-y-1/2 z-20 text-gray-400 flex items-center justify-center w-10 h-10 bg-white" onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="text-[16px] block" />
    </button>
  );
};
export default function ImageSlide() {
  return (
    <Swiper className="group" slidesPerView={1} spaceBetween={0} loop={true} allowTouchMove={false}>
      <SwiperSlide>
        <Link href={'/collections/collecion-name/products/product-name'}>
          <img draggable={false} className="pointer-events-none select-none w-full h-[400px] object-cover object-top" src="/img/products/imagen.webp" alt="product" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href={'/collections/collecion-name/products/product-name'}>
          <img draggable={false} className="pointer-events-none select-none w-full h-[400px] object-cover object-top" src="/img/products/imagen-2.webp" alt="product" />
        </Link>
      </SwiperSlide>

      <div className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300">
        <Prev />
        <Next />
      </div>
    </Swiper>
  );
}
