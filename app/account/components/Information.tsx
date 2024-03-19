import { IoSearchOutline } from 'react-icons/io5';
import { PiCursorClickLight, PiShareNetwork } from 'react-icons/pi';
import { GiReceiveMoney } from 'react-icons/gi';
import { FaShippingFast } from 'react-icons/fa';
import { LinkBlack } from '@/app/shared/components/ui/Links';

interface InformationProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Information({ ...props }: InformationProps) {
  return (
    <div {...props}>
      <h3 className="font-extrabold text-3xl capitalize mb-4">¿Cómo comprar?</h3>
      <ul className="mb-4">
        <li className="flex items-center gap-2 font-medium text-gray-500 text-sm mb-2">
          <IoSearchOutline className="text-[24px]" />
          <span>Busca en la barra de búsqueda</span>
        </li>
        <li className="flex items-center gap-2 font-medium text-gray-500 text-sm mb-2">
          <PiCursorClickLight className="text-[24px]" />

          <span>Con un solo click</span>
        </li>
        <li className="flex items-center gap-2 font-medium text-gray-500 text-sm mb-2">
          <GiReceiveMoney className="text-[24px]" />
          <span>Ofrecemos productos de calidad</span>
        </li>
        <li className="flex items-center gap-2 font-medium text-gray-500 text-sm mb-2">
          <FaShippingFast className="text-[24px]" />
          <span>Con envíos a todo el país</span>
        </li>
        <li className="flex items-center gap-2 font-medium text-gray-500 text-sm">
          <PiShareNetwork className="text-[24px]" />
          <span>No olvides contactarnos por las redes</span>
        </li>
      </ul>
      <LinkBlack href="/search" className="uppercase w-fit">
        Buscar
      </LinkBlack>
    </div>
  );
}
