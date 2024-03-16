import Link from 'next/link';
import { IoChevronDown } from 'react-icons/io5';
import { Checkbox, Input, Label, Select, Radio } from '@shared/components/ui/Input';
import { ButtonBlack } from '@shared/components/ui/Buttons';

export default function Page() {
  return (
    <section className="max-w-[1200px] mx-auto p-4 md:p-6 flex flex-col-reverse lg:flex-row lg:gap-4 lg:items-start">
      <form className="flex flex-col gap-4 basis-[55%] mt-10 lg:mt-0">
        {/* contacto */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Contacto</h2>
          <Link href="/cart" className="text-sm underline">
            Regresar
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <Input type="email" name="email" title="Correo electrónico" id="email" />

          <div className="flex items-center w-fit gap-2">
            <Checkbox type="checkbox" name="subscribe" id="subscribe" />
            <Label htmlFor="subscribe">Enviarme novedades y ofertas por correo electrónico</Label>
          </div>
        </div>

        {/* entrega */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Entrega</h2>
          <a href="https://agencias.shalom.pe/" target="_blank" rel="noopener noreferrer" className="text-sm underline">
            Ver disponibilidad de shalom
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Select name="delivery" title="Método de entrega" id="delivery">
              <option value=""></option>
              <option value="shipping">Recogo en tienda</option>
            </Select>

            <Select name="country" title="País" id="country">
              <option value=""></option>
              <option value="mexico">Perú</option>
            </Select>
          </div>

          <div className="flex items-center gap-4">
            <Input type="text" name="name" title="Nombre" id="name" />
            <Input type="text" name="lastnames" title="Apellidos" id="lastnames" />
          </div>

          <Input name="dni" title="DNI" id="dni" />

          <Input name="address" title="Dirección" id="address" />
          <Input name="reference" title="Referencia" id="reference" />
          <div className="flex items-center gap-4">
            <Input name="district" title="Distrito" id="district" />
            <Input name="region" title="Región" id="region" />
            <Input name="city" title="Ciudad" id="city" />
          </div>
          <Input name="postal" title="Código postal" id="postal" />
          <Input name="phone" title="Teléfono" id="phone" />

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center w-fit gap-2">
              <Checkbox type="checkbox" name="save" id="save" />
              <Label htmlFor="save">Guardar esta dirección</Label>
            </div>
            <Link href="/addresses" className="text-sm underline">
              Ver direcciones guardadas
            </Link>
          </div>
        </div>

        <div className="lg:hidden block">
          <ButtonBlack className="w-full">Continuar con el pago</ButtonBlack>
        </div>
      </form>

      <div className="basis-[45%] bg-gray-50 bg-opacity-50 border border-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-semibold uppercase">Resumen del pedido</h2>
        </div>

        <div>
          <button className="flex items-center justify-between gap-4 w-full p-4 bg-white border-b border-t border-gray-200">
            <p className="text-sm">(1) Producto</p>
            <IoChevronDown className="text-xl" />
          </button>

          <div>
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
          </div>
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
            <p className="text-sm">Impuestos</p>
            <p className="text-sm">S/ 0.00</p>
          </div>
          <div className="flex items-center justify-between gap-4 w-full px-4 py-2 bg-white border-b border-gray-200">
            <p className="font-bold text-lg">Total</p>
            <p className="font-bold">S/ 0.00</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-lg font-semibold">Método de pago</h2>

          <div className="flex items-center gap-4">
            <Radio name="payment" id="card" />
            <Label htmlFor="card">Tarjeta de crédito o débito</Label>
          </div>

          <div className="flex items-center gap-4">
            <Radio name="payment" id="cash" />
            <Label htmlFor="cash">Contra entrega</Label>
          </div>

          <div className="flex items-center gap-4">
            <Radio name="payment" id="transfer" />
            <Label htmlFor="transfer">Transferencia bancaria</Label>
          </div>

          <div className="flex items-center gap-4">
            <Radio name="payment" id="yape" />
            <Label htmlFor="yape">Yape</Label>
          </div>
        </div>

        <div className="p-4 hidden lg:block">
          <ButtonBlack className="w-full">Continuar con el pago</ButtonBlack>
        </div>
      </div>
    </section>
  );
}
