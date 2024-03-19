import Link from 'next/link';
import { ChildrenProps } from '@shared/interfaces';
import Information from './components/Information';
import { FaRegUserCircle } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiLogout } from 'react-icons/ci';

export default function Layout({ children }: ChildrenProps) {
  return (
    <section className="container p-4 md:p-6 flex flex-col lg:flex-row items-start gap-10">
      <aside className="p-8 border bg-gray-50 rounded-lg shadow-sm w-full lg:w-[500px] lg:sticky lg:top-[95px] lg:z-10">
        <div className="flex flex-col gap-2">
          <Link className="w-fit flex items-center gap-2 font-bold text-sm" href="/account">
            <FaRegUserCircle className="text-lg" />
            Cuenta
          </Link>
          <Link className="w-fit flex items-center gap-2 font-bold text-sm" href="/account/orders">
            <TbTruckDelivery className="text-lg" />
            Pedidos
          </Link>
          <button className="w-fit flex items-center gap-2 font-bold text-sm text-gray-400" title="Cerrar Sesión">
            <CiLogout className="text-lg" />
            Cerrar sesión
          </button>
        </div>

        <Information className="mt-10 hidden lg:block" />
      </aside>
      <section className="w-full lg:w-full">{children}</section>

      <Information className="mt-10 block lg:hidden" />
    </section>
  );
}
