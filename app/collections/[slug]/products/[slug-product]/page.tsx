'use client';
import { ButtonBlack, ButtonWhite } from '@/app/shared/components/ui/Buttons';
import Dropdowns from './components/dropdowns/Dropdowns';
import ProductList from '@/app/products/components/ProductList';
import { dropdowns } from './constants/dropdowns';
import ProductImageSlide from './components/ProductImageSlide';

export default function Page() {
  return (
    <div>
      <div className="container md:flex md:items-start">
        <div className="xl:w-[60%] md:w-[40%] md:sticky md:top-[70px] md:z-10">
          <ProductImageSlide
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
          />
        </div>

        <div className="xl:w-[40%] md:w-[60%] p-6 md:p-10 xl:p-20">
          <div className="py-4">
            <h2 className="text-gray-400">NOW</h2>
            <h3 className="text-black font-bold capitalize text-2xl my-2">Camisa Safe - Vino</h3>
            <div>
              <strong className="text-gray-400 text-sm">S/. 169.90 PEN</strong>
              <span className="text-gray-400 text-sm line-through ml-2">S/. 199.90 PEN</span>
              <span className="text-green-500 text-sm ml-2">-15%</span>
            </div>
          </div>

          <div>
            <div className="flex flex-col items-start gap-4">
              <div>
                <h2 className="text-sm mb-2 font-bold text-gray-500">Talla</h2>
                <div className="flex flex-wrap items-stretch gap-3">
                  <ButtonWhite className="px-6 py-3 flex items-center justify-center text-center font-normal">X</ButtonWhite>
                  <ButtonWhite className="px-6 py-3 flex items-center justify-center text-center font-normal">X</ButtonWhite>
                  <ButtonWhite className="px-6 py-3 flex items-center justify-center text-center font-normal">X</ButtonWhite>
                  <ButtonWhite className="px-6 py-3 flex items-center justify-center text-center font-normal">X</ButtonWhite>
                </div>
              </div>
              <div>
                <h2 className="text-sm mb-2 font-bold text-gray-500">Color</h2>
                <div className="flex flex-wrap items-center justify-center gap-4 my-2">
                  <button className="relative flex items-center justify-center w-[28px] h-[28px] border-2 rounded-full border-gray-200 focus-within:outline focus-within:outline-offset-1 focus-within:outline-red-400 p-[3px] bg-white" aria-label="Color blanco">
                    <span className="w-full h-full bg-white rounded-full pointer-events-none"></span>
                  </button>
                  <button className="relative flex items-center justify-center w-[28px] h-[28px] border-2 rounded-full border-gray-200 focus-within:outline focus-within:outline-offset-1 focus-within:outline-red-400 p-[3px] bg-white" aria-label="Color Negro">
                    <span className="w-full h-full bg-black rounded-full pointer-events-none"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="py-4">
              <button className="underline text-gray-500 text-sm">Tabla de Tallas</button>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-stretch gap-3">
                <div className="flex items-stretch gap-2">
                  <ButtonWhite className="px-6">-</ButtonWhite>
                  <input type="text" placeholder="1" className="w-[50px] text-center placeholder:text-center" />
                  <ButtonWhite className="px-6">+</ButtonWhite>
                </div>
                <ButtonWhite className="flex-1">Agregar al carrito</ButtonWhite>
              </div>
              <ButtonBlack>Comprar Ahora</ButtonBlack>
            </div>
          </div>

          <div className="mt-10">
            <div>
              <h2 className="font-semibold text-[16px]">Descripción & Composición: </h2>

              <div className="p-6 ml-6">
                <ul>
                  <li className="list-disc text-sm">Camisa con mangas largas.</li>
                  <li className="list-disc text-sm">Pechera con botones metalicos.</li>
                  <li className="list-disc text-sm">Efecto acid wash</li>
                  <li className="list-disc text-sm">Bolsillos en delantero.</li>
                  <li className="list-disc text-sm">Canesú en espalda con pliegues.</li>
                  <li className="list-disc text-sm">Material: Tela chambray.Botón en puño de manga para ajuste.</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-[16px]">Cuidados: </h2>

              <div className="p-6 ml-6">
                <ul>
                  <li className="list-disc text-sm">Lavar con agua fría.</li>
                  <li className="list-disc text-sm">No usar blanqueador ni retorcer.</li>
                  <li className="list-disc text-sm">Secar a la sombra.</li>
                  <li className="list-disc text-sm">Plancha tibia</li>
                </ul>
              </div>
            </div>

            <div className="py-8">
              <Dropdowns items={dropdowns} />
            </div>
          </div>
        </div>
      </div>

      <ProductList />
    </div>
  );
}
