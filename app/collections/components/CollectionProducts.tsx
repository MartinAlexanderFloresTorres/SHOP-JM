'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { twMerge } from 'tailwind-merge';
import { LinkBlack } from '@shared/components/ui/Links';
import { CollectionProduct } from '@/app/collections/interfaces';
import Product from '@/app/products/components/Product';

interface CategoryProps {
  className?: string;
  category: CollectionProduct;
}

export default function CollectionProducts({ className, category }: CategoryProps) {
  return (
    <div className={twMerge('lg:grid grid-cols-2 gap-4 md:gap-6 w-full h-full items-center', className)}>
      <div className={'relative w-ful h-full mb-6 lg:mb-0'}>
        {category.file.type === 'image' && <img className="absolute inset-0 -z-10 w-full h-full object-cover" src={category.file.url} alt={category.name} />}
        {category.file.type === 'video' && <video className="absolute inset-0 -z-10 w-full h-full object-cover" autoPlay loop muted playsInline src={category.file.url} />}

        <div className="banner w-full h-full flex items-end min-h-[200px]">
          <div className="p-4">
            <h2 className="uppercase text-white text-4xl font-extrabold mb-2 line-clamp-1">{category.name}</h2>
            <p className="text-white line-clamp-2 mb-2">{category.description}</p>
            <LinkBlack className="px-6" href={`/collections/${category.id}`}>
              Ver todo
            </LinkBlack>
          </div>
        </div>
      </div>

      <Swiper
        className="relative w-full"
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 },
          800: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 2, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        loop={true}
      >
        {category.products.map((product) => (
          <SwiperSlide key={product.id} className="pb-12">
            <Product />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
