import Link from 'next/link';
import ImageSlide from './ImageSlide';

export default function Product() {
  return (
    <article className="relative w-full overflow-hidden">
      <div className="select-none pointer-events-none absolute top-4 -left-10 py-2 px-11 transform -rotate-45 flex items-center justify-center text-center text-sm z-10 bg-black text-white font-bold uppercase">Agotado</div>
      <div className="select-none pointer-events-none absolute top-2 right-2 rounded-full flex items-center justify-center text-center w-[50px] h-[50px] text-sm z-10 bg-red-500 text-white font-bold uppercase">-40%</div>
      <ImageSlide />
      <div className="block text-center p-4">
        <Link href={'#'} className="font-semibold text-lg line-clamp-1">
          Polera Adidad - Negro
        </Link>
        <div className="flex gap-4 items-center justify-center text-center text-lg">
          <Link href={'#'} className="font-bold">
            S/. 300.99
          </Link>
          <Link href={'#'} className="line-through text-gray-500 text-sm">
            S/. 350.99
          </Link>
        </div>
      </div>
    </article>
  );
}
