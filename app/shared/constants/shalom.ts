import { FaMapMarkerAlt } from 'react-icons/fa';
import { LuPackageSearch } from 'react-icons/lu';
import { MdOutlinePayment, MdOutlinePriceChange } from 'react-icons/md';
import { Service } from '@shared/interfaces/service';

export const shalomServices: Service[] = [
  {
    id: 1,
    titulo: 'Busca tu agencia',
    descripcion: 'Encuentra tu agencia más cercana',
    icon: FaMapMarkerAlt,
    url: 'https://agencias.shalom.pe/',
  },
  {
    id: 2,
    titulo: 'Consulta tarifa',
    descripcion: 'Consulta tarifas de envíos, reparto y recojo',
    icon: MdOutlinePriceChange,
    url: 'https://tarifas.shalom.pe/',
  },
  {
    id: 3,
    titulo: 'Rastrea tu envío',
    descripcion: 'Conoce dónde se encuentra tu envío',
    icon: LuPackageSearch,
    url: 'https://rastrea.shalom.pe/',
  },
  {
    id: 4,
    titulo: 'Págalo online',
    descripcion: 'Realiza tus envíos y págalo desde casa',
    icon: MdOutlinePayment,
    url: 'https://pagalo.shalom.pe/web',
  },
  {
    id: 5,
    titulo: 'Recojelo en agencia',
    descripcion: 'Encuentra tu agencia más cercana',
    icon: FaMapMarkerAlt,
    url: 'https://agencias.shalom.pe/',
  },
];
