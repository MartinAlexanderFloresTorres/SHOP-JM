import Link from 'next/link';
import ImageSlide from '@/app/products/components/ImageSlide';
import { ButtonWhite } from '@shared/components/ui/Buttons';
import { LinkBlack } from '@shared/components/ui/Links';

export default function Page() {
  return (
    <section className="max-w-[1200px] mx-auto p-4 md:p-6 flex flex-col-reverse lg:flex-row lg:gap-4 lg:items-start">
      <div className="carts-items lg:basis-[70%]">
        <article className="flex items-stretch gap-4 sm:gap-6 border-b border-b-gray-200 py-8">
          <div className="relative">
            <div className="select-none pointer-events-none absolute -top-[10px] -right-[10px] rounded-full flex items-center justify-center text-center w-[40px] h-[40px] text-xs z-10 bg-red-500 text-white font-bold uppercase">-40%</div>
            <ImageSlide
              allowTouchMove={true}
              classContainer="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classImage="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classButton="text-[10px] w-[22px] h-[22px]"
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
          <div className="flex-col sm:flex-row flex sm:items-center justify-center sm:justify-between gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Link href="/collections/now/products/camisa-safe-vino" className="text-black font-bold capitalize text-xl line-clamp-2 hover:underline">
                Camisa Safe
              </Link>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-xs line-through">S/. 199.90</p>
                <p className="text-gray-500 text-sm font-bold">S/. 99.90</p>
              </div>
              <p className="text-sm text-gray-500">XS / BLACK</p>
            </div>
            <div>
              <div className="flex items-stretch gap-2 mb-3">
                <ButtonWhite className="px-4 md:px-6">-</ButtonWhite>
                <input type="text" placeholder="1" className="w-[50px] text-center placeholder:text-center" />
                <ButtonWhite className="px-4 md:px-6">+</ButtonWhite>
              </div>
              <h2 className="mb-3 sm:text-center">
                <span className="font-bold">Total:</span> <span>S/. 99.90</span>
              </h2>
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                <button className="text-xs hover:underline text-gray-400">Guardar para después</button>
                <button className="text-xs hover:underline text-gray-400">Quitar</button>
              </div>
            </div>
          </div>
        </article>

        <article className="flex items-stretch gap-4 sm:gap-6 border-b border-b-gray-200 py-8">
          <div className="relative">
            <div className="select-none pointer-events-none absolute -top-[10px] -right-[10px] rounded-full flex items-center justify-center text-center w-[40px] h-[40px] text-xs z-10 bg-red-500 text-white font-bold uppercase">-40%</div>
            <ImageSlide
              allowTouchMove={true}
              classContainer="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classImage="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classButton="text-[10px] w-[22px] h-[22px]"
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
          <div className="flex-col sm:flex-row flex sm:items-center justify-center sm:justify-between gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Link href="/collections/now/products/camisa-safe-vino" className="text-black font-bold capitalize text-xl line-clamp-2 hover:underline">
                Camisa Safe
              </Link>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-xs line-through">S/. 199.90</p>
                <p className="text-gray-500 text-sm font-bold">S/. 99.90</p>
              </div>
              <p className="text-sm text-gray-500">XS / BLACK</p>
            </div>
            <div>
              <div className="flex items-stretch gap-2 mb-3">
                <ButtonWhite className="px-4 md:px-6">-</ButtonWhite>
                <input type="text" placeholder="1" className="w-[50px] text-center placeholder:text-center" />
                <ButtonWhite className="px-4 md:px-6">+</ButtonWhite>
              </div>
              <h2 className="mb-3 sm:text-center">
                <span className="font-bold">Total:</span> <span>S/. 99.90</span>
              </h2>
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                <button className="text-xs hover:underline text-gray-400">Guardar para después</button>
                <button className="text-xs hover:underline text-gray-400">Quitar</button>
              </div>
            </div>
          </div>
        </article>

        <article className="flex items-stretch gap-4 sm:gap-6 border-b border-b-gray-200 py-8">
          <div className="relative">
            <div className="select-none pointer-events-none absolute -top-[10px] -right-[10px] rounded-full flex items-center justify-center text-center w-[40px] h-[40px] text-xs z-10 bg-red-500 text-white font-bold uppercase">-40%</div>
            <ImageSlide
              allowTouchMove={true}
              classContainer="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classImage="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classButton="text-[10px] w-[22px] h-[22px]"
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
          <div className="flex-col sm:flex-row flex sm:items-center justify-center sm:justify-between gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Link href="/collections/now/products/camisa-safe-vino" className="text-black font-bold capitalize text-xl line-clamp-2 hover:underline">
                Camisa Safe
              </Link>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-xs line-through">S/. 199.90</p>
                <p className="text-gray-500 text-sm font-bold">S/. 99.90</p>
              </div>
              <p className="text-sm text-gray-500">XS / BLACK</p>
            </div>
            <div>
              <div className="flex items-stretch gap-2 mb-3">
                <ButtonWhite className="px-4 md:px-6">-</ButtonWhite>
                <input type="text" placeholder="1" className="w-[50px] text-center placeholder:text-center" />
                <ButtonWhite className="px-4 md:px-6">+</ButtonWhite>
              </div>
              <h2 className="mb-3 sm:text-center">
                <span className="font-bold">Total:</span> <span>S/. 99.90</span>
              </h2>
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                <button className="text-xs hover:underline text-gray-400">Guardar para después</button>
                <button className="text-xs hover:underline text-gray-400">Quitar</button>
              </div>
            </div>
          </div>
        </article>

        <article className="flex items-stretch gap-4 sm:gap-6 border-b border-b-gray-200 py-8">
          <div className="relative">
            <div className="select-none pointer-events-none absolute -top-[10px] -right-[10px] rounded-full flex items-center justify-center text-center w-[40px] h-[40px] text-xs z-10 bg-red-500 text-white font-bold uppercase">-40%</div>
            <ImageSlide
              allowTouchMove={true}
              classContainer="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classImage="w-[150px] h-[220px] sm:w-[120px] sm:h-[140px]"
              classButton="text-[10px] w-[22px] h-[22px]"
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
          <div className="flex-col sm:flex-row flex sm:items-center justify-center sm:justify-between gap-4 w-full">
            <div className="flex flex-col gap-1">
              <Link href="/collections/now/products/camisa-safe-vino" className="text-black font-bold capitalize text-xl line-clamp-2 hover:underline">
                Camisa Safe
              </Link>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-xs line-through">S/. 199.90</p>
                <p className="text-gray-500 text-sm font-bold">S/. 99.90</p>
              </div>
              <p className="text-sm text-gray-500">XS / BLACK</p>
            </div>
            <div>
              <div className="flex items-stretch gap-2 mb-3">
                <ButtonWhite className="px-4 md:px-6">-</ButtonWhite>
                <input type="text" placeholder="1" className="w-[50px] text-center placeholder:text-center" />
                <ButtonWhite className="px-4 md:px-6">+</ButtonWhite>
              </div>
              <h2 className="mb-3 sm:text-center">
                <span className="font-bold">Total:</span> <span>S/. 99.90</span>
              </h2>
              <div className="flex items-center gap-2 flex-wrap justify-between sm:justify-start">
                <button className="text-xs hover:underline text-gray-400">Guardar para después</button>
                <button className="text-xs hover:underline text-gray-400">Quitar</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="basis-[30%] bg-gray-50 bg-opacity-50 border border-gray-200 lg:sticky lg:top-[100px] lg:z-10">
        <div className="p-4">
          <h2 className="text-lg font-semibold uppercase">Carrito de compras</h2>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-t border-gray-200">
            <p className="text-sm">Subtotal</p>
            <p className="text-sm">S/ 0.00</p>
          </div>
          <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
            <p className="text-sm">Envío</p>
            <p className="text-sm">S/ 0.00</p>
          </div>
          <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold">S/ 0.00</p>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-row-reverse lg:flex-col gap-2 mb-4">
            <LinkBlack className="text-sm w-full" href="/checkouts">
              Pagar
            </LinkBlack>
            <ButtonWhite className="text-sm w-full">Seguir comprando</ButtonWhite>
          </div>

          <div className="flex items-center justify-between gap-1">
            <button className="text-sm text-gray-500 hover:underline">Vaciar carrito</button>
            <button className="text-sm text-gray-500 hover:underline">Ver lista de deseos</button>
          </div>
        </div>
      </div>
    </section>
  );
}
