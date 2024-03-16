'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Next = ({ className }: ButtonProps) => {
  const swiper = useSwiper();
  return (
    <button className={twMerge('absolute right-1 top-1/2 transform -translate-y-1/2 z-20 text-[14px] text-gray-400 flex items-center justify-center w-10 h-10 bg-white', className)} onClick={() => swiper.slideNext()}>
      <FaChevronRight className="block" />
    </button>
  );
};

const Prev = ({ className }: ButtonProps) => {
  const swiper = useSwiper();
  return (
    <button className={twMerge('absolute left-1 top-1/2 transform -translate-y-1/2 z-20 text-[14px] text-gray-400 flex items-center justify-center w-10 h-10 bg-white', className)} onClick={() => swiper.slidePrev()}>
      <FaChevronLeft className="block" />
    </button>
  );
};

interface ImageSlideProps {
  classContainer?: string;
  classImage?: string;
  classButton?: string;
  images: { id: number; url: string }[];
  allowTouchMove?: boolean;
  link: string;
}

export default function ImageSlide({ images = [], link, allowTouchMove = false, classContainer, classImage, classButton }: ImageSlideProps) {
  return (
    <section className={twMerge('w-full', classContainer)}>
      <Swiper className="group" slidesPerView={1} spaceBetween={0} loop={true} allowTouchMove={allowTouchMove}>
        {images.map(({ id, url }) => (
          <SwiperSlide key={id} className="w-full h-full">
            <Link href={link} className="block w-full h-full">
              <img draggable={false} className={twMerge('pointer-events-none select-none w-full h-[400px] object-cover object-top', classImage)} src={url} alt="product" />
            </Link>
          </SwiperSlide>
        ))}

        <div className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300">
          <Prev className={classButton} />
          <Next className={classButton} />
        </div>
      </Swiper>
    </section>
  );
}
