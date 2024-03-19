'use client';

import { useState } from 'react';
import { ButtonBlack, ButtonWhite } from '@/app/shared/components/ui/Buttons';
import Dropdown from '@/app/shared/components/ui/Dropdown';
import OrderDetail from './components/OrderDetail';

export default function Page() {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => setShowDetail(!showDetail);
  return (
    <div className="w-full">
      <div className="mb-8 max-w-[600px]">
        <h2 className="font-bold text-3xl mb-4">Mis pedidos</h2>
        <p className="text-gray-500 text-sm">
          Aquí puedes ver el estado de tus pedidos, así como los detalles de cada uno. <b>Recuerda</b> que la información de los productos se generan cuando se realiza un pedido y los precios u otra información no cambiaran si se realiza un cambio en el producto.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Dropdown
          active={true}
          title={
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-semibold uppercase">Pedido #123456789</h2>

              <span className="text-gray-500 text-xs">Hace 3 días</span>
            </div>
          }
          classButton="bg-gray-50 bg-opacity-50 px-4 border"
          classContent="p-0  bg-gray-50 bg-opacity-50 border border-t-0 border-gray-200"
        >
          <div>
            <Dropdown title="(1) Producto" active={true} classButton="w-full p-4 bg-white border-b-0" classContent="border-b-0 border-t">
              <article className="w-full flex items-center justify-between gap-6 p-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[70px]">
                    <img src="/img/products/imagen.webp" className="w-full h-full object-cover object-top" alt="Producto" />
                    <span className="absolute -top-[10px] -right-[10px] bg-black rounded-full w-[24px] h-[24px] text-xs font-bold flex items-center justify-center text-center text-white p-1">1</span>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold uppercase">Camisa Safe - Vino</h6>
                    <p className="text-xs text-gray-400">M / BLACK</p>
                  </div>
                </div>

                <div>
                  <p className="text-nowrap text-xs text-gray-700 line-through mb-1">S/ 100.000</p>
                  <p className="text-nowrap text-sm font-semibold">S/ 50.000</p>
                </div>
              </article>
            </Dropdown>

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
                <p className="text-sm">Impuestos</p>
                <p className="text-sm">S/ 0.00</p>
              </div>
              <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold">S/ 0.00</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-end gap-4">
              <ButtonWhite className="w-fit">Imprimir</ButtonWhite>
              <ButtonBlack className="w-fit" onClick={toggleDetail}>
                Ver detalles
              </ButtonBlack>
            </div>
          </div>
        </Dropdown>

        <Dropdown
          title={
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-semibold uppercase">Pedido #2525256789</h2>

              <span className="text-gray-500 text-xs">Hace 3 días</span>
            </div>
          }
          classButton="bg-gray-50 bg-opacity-50 px-4 border"
          classContent="p-0  bg-gray-50 bg-opacity-50 border border-t-0 border-gray-200"
        >
          <div>
            <Dropdown title="(1) Producto" active={true} classButton="w-full p-4 bg-white border-b-0" classContent="border-b-0 border-t">
              <article className="w-full flex items-center justify-between gap-6 p-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-[60px] h-[70px]">
                    <img src="/img/products/imagen.webp" className="w-full h-full object-cover object-top" alt="Producto" />
                    <span className="absolute -top-[10px] -right-[10px] bg-black rounded-full w-[24px] h-[24px] text-xs font-bold flex items-center justify-center text-center text-white p-1">1</span>
                  </div>
                  <div>
                    <h6 className="text-sm font-semibold uppercase">Camisa Safe - Vino</h6>
                    <p className="text-xs text-gray-400">M / BLACK</p>
                  </div>
                </div>

                <div>
                  <p className="text-nowrap text-xs text-gray-700 line-through mb-1">S/ 100.000</p>
                  <p className="text-nowrap text-sm font-semibold">S/ 50.000</p>
                </div>
              </article>
            </Dropdown>

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
                <p className="text-sm">Impuestos</p>
                <p className="text-sm">S/ 0.00</p>
              </div>
              <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
                <p className="font-bold text-lg">Total</p>
                <p className="font-bold">S/ 0.00</p>
              </div>
            </div>

            <div className="p-4 flex items-center justify-end gap-4">
              <ButtonWhite className="w-fit">Imprimir</ButtonWhite>
              <ButtonBlack className="w-fit" onClick={toggleDetail}>
                Ver detalles
              </ButtonBlack>
            </div>
          </div>
        </Dropdown>
      </div>

      {showDetail && <OrderDetail onClose={toggleDetail} />}
    </div>
  );
}
