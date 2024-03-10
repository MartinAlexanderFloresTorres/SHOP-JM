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
export default function ImageSlide() {
  return (
    <Swiper className="group" slidesPerView={1} spaceBetween={1}>
      <SwiperSlide>
        <img className="select-none w-full h-[400px] object-cover object-top" src="/producto-1.webp" alt="product" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="select-none w-full h-[400px] object-cover object-top" src="/producto-2.webp" alt="product" />
      </SwiperSlide>

      <div className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300">
        <Prev />
        <Next />
      </div>
    </Swiper>
  );
}
