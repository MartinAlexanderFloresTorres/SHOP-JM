'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

interface Item {
  id: number | string;
  children: React.ReactNode;
}

interface TranslateTopProps {
  items: Item[];
  clasNameContainer?: string;
}

export default function TranslateTop({ items, clasNameContainer = '' }: TranslateTopProps) {
  const pathName = usePathname();
  if (pathName !== '/') return null;

  return (
    <section className={twMerge('py-2 px-4 select-none', clasNameContainer)}>
      <Swiper slidesPerView={1} wrapperClass="items-center" autoplay={{ delay: 3000, disableOnInteraction: false }} modules={[Autoplay]} loop={true}>
        {items.map(({ id, children }) => (
          <SwiperSlide key={id}>{children}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
