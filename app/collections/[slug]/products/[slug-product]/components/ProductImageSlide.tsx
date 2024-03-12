'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

interface ImageSlide {
  url: string;
  id: string | number;
}

interface ProductImageSlideProps {
  images: ImageSlide[];
}

export default function ProductImageSlide({ images = [] }: ProductImageSlideProps) {
  return (
    <Swiper
      className="group w-full h-[calc(100vh-70px)]"
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        1124: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      }}
      loop={true}
    >
      {images.map(({ url, id }) => (
        <SwiperSlide key={id}>
          <img className="pointer-events-none w-full h-full object-cover" src={url} alt="Product Image" />
        </SwiperSlide>
      ))}

      <div className="xl:group-hover:opacity-100 xl:opacity-0 transition-opacity duration-300">
        <Prev />
        <Next />
      </div>
    </Swiper>
  );
}
