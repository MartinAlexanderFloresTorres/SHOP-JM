'use client';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { twMerge } from 'tailwind-merge';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LinkBlack, LinkWhite } from '@shared/components/ui/Links';

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

interface Link {
  id: string | number;
  name: string;
  url: string;
  color: 'black' | 'white';
}

interface Banner {
  id: string | number;
  title: string;
  theme: 'black' | 'white';
  banner: {
    type: 'image' | 'video';
    url: string;
  };
  links: Link[];
}

interface SwiperBannersProps {
  banners: Banner[];
}

export default function SwiperBanners({ banners = [] }: SwiperBannersProps) {
  return (
    <Swiper slidesPerView={1} autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]}>
      {banners.map(({ id, title, theme, banner, links }) => (
        <SwiperSlide key={id} className="relative select-none">
          {banner.type === 'image' && <img className="block w-full h-[calc(100vh-70px-40px)] min-h-[299px] object-cover bg-black pointer-events-none" src={banner.url} alt={title} />}
          {banner.type === 'video' && <video className="block w-full h-[calc(100vh-70px-40px)] min-h-[299px] object-cover bg-black pointer-events-none" width="600" height="500" src={banner.url} autoPlay loop muted playsInline />}
          <div className="overlay absolute inset-0 z-10">
            <div className="w-full h-full flex flex-col items-center justify-center gap-4">
              <h2 className={twMerge('text-center text-3xl md:text-4xl font-normal uppercase max-w-[700px] mx-auto', theme === 'black' ? 'text-black' : 'text-white')}>{title}</h2>
              <div className="flex items-center justify-center gap-4">
                {links.map(({ id, color, name, url }) => {
                  if (color === 'black')
                    return (
                      <LinkBlack key={id} className="px-10 rounded-full" href={url}>
                        {name}
                      </LinkBlack>
                    );
                  return (
                    <LinkWhite key={id} className="px-10 rounded-full" href={url}>
                      {name}
                    </LinkWhite>
                  );
                })}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {banners.length > 1 && (
        <div className="lg:block hidden">
          <Prev />
          <Next />
        </div>
      )}
    </Swiper>
  );
}
