import { IoClose } from 'react-icons/io5';
import { ButtonBlack, ButtonWhite } from '@/app/shared/components/ui/Buttons';
import Modal from '@/app/shared/components/ui/Modal';
import Dropdown from '@/app/shared/components/ui/Dropdown';

interface OrderDetailProps {
  onClose: () => void;
}

export default function OrderDetail({ onClose }: OrderDetailProps) {
  return (
    <Modal onClose={onClose} title="Orden #213213123" description="Visualiza el detalle de esta orden de compra" allowCloseOnTouch={true} showHeader={true} IconClose={IoClose} center={true} classNameContent="p-0">
      <div className="w-full">
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
              <p className="text-sm font-bold">Total</p>
              <p className="font-sm font-bold">S/ 0.00</p>
            </div>

            <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
              <p className="text-sm">Fecha de compra</p>
              <p className="font-sm">28 de julio de 2021</p>
            </div>

            <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
              <p className="text-sm">Estado de la orden</p>
              <p className="font-sm">En proceso</p>
            </div>

            <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
              <p className="text-sm">Dirección de envío</p>
              <p className="font-sm">Calle 123, Colonia 123, Ciudad 123, Estado 123, C.P. 12345</p>
            </div>

            <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
              <p className="text-sm">Método de pago</p>
              <p className="font-sm">Tarjeta de crédito</p>
            </div>
          </div>

          <div className="p-4 flex items-center justify-end gap-4">
            <ButtonWhite className="w-fit">Imprimir</ButtonWhite>
            <ButtonBlack type="button" onClick={onClose}>
              Cerrar
            </ButtonBlack>
          </div>
        </div>
      </div>
    </Modal>
  );
}
