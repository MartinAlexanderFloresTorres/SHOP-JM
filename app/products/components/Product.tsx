import Link from 'next/link';
import ImageSlide from './ImageSlide';

export default function Product() {
  return (
    <article>
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
