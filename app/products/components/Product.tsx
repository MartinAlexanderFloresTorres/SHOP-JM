import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import ImageSlide from '@/app/products/components/ImageSlide';
import { ButtonWhite } from '@shared/components/ui/Buttons';
import { LinkBlack } from '@shared/components/ui/Links';

export default function Product() {
  return (
    <article className="group w-full">
      <div className="relative z-10 w-full h-fit overflow-hidden">
        <div className="select-none pointer-events-none absolute top-4 -left-10 py-2 px-11 transform -rotate-45 flex items-center justify-center text-center text-sm z-10 bg-black text-white font-bold uppercase">Agotado</div>
        <div className="select-none pointer-events-none absolute top-2 right-2 rounded-full flex items-center justify-center text-center w-[50px] h-[50px] text-sm z-10 bg-red-500 text-white font-bold uppercase">-40%</div>

        <ImageSlide
          images={[
            {
              id: 1,
              url: '/img/products/imagen.webp',
            },
            {
              id: 2,
              url: '/img/products/imagen-2.webp',
            },
            {
              id: 3,
              url: '/img/products/imagen.webp',
            },
            {
              id: 4,
              url: '/img/products/imagen-2.webp',
            },
          ]}
          link="/collections/now/products/camisa-safe-vino"
        />
      </div>
      <div className="w-full">
        <div className="p-4">
          <Link href={'/collections/collecion-name/products/product-name'} className="text-center font-semibold text-[16px] line-clamp-1">
            Polera Adidas
          </Link>
          <div className="w-full flex flex-wrap gap-y-1 gap-x-4 items-center justify-center text-[15px]">
            <Link href={'/collections/collecion-name/products/product-name'} className="text-center font-bold text-nowrap line-clamp-1">
              S/. 300.99
            </Link>
            <Link href={'/collections/collecion-name/products/product-name'} className="text-center line-through text-gray-500 text-[12px] md:text-[14px] text-nowrap line-clamp-1">
              S/. 350.99
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 my-2">
            <button className="relative flex items-center justify-center w-[28px] h-[28px] border-2 rounded-full border-gray-200 focus-within:outline focus-within:outline-offset-1 focus-within:outline-red-400 p-[3px] bg-white" aria-label="Color blanco">
              <span className="w-full h-full bg-white rounded-full pointer-events-none"></span>
            </button>
            <button className="relative flex items-center justify-center w-[28px] h-[28px] border-2 rounded-full border-gray-200 focus-within:outline focus-within:outline-offset-1 focus-within:outline-red-400 p-[3px] bg-white" aria-label="Color Negro">
              <span className="w-full h-full bg-black rounded-full pointer-events-none"></span>
            </button>
          </div>
        </div>

        <div className="lg:group-hover:opacity-100 lg:opacity-0 transition-opacity duration-300 flex items-stretch w-full gap-1">
          <LinkBlack className="w-full" aria-label="Comprar Ahora" href={'/collections/collecion-name/products/product-name'}>
            Comprar Ahora
          </LinkBlack>
          <ButtonWhite className="w-fit" aria-label="Comprar Ahora">
            <HiOutlineShoppingBag className="text-2xl" />
          </ButtonWhite>
        </div>
      </div>
    </article>
  );
}
