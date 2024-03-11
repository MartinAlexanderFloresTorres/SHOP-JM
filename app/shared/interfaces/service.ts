import { IconType } from 'react-icons';

export interface Service {
  titulo: string;
  descripcion: string;
  id: number;
  icon: IconType;
  url: string;
}
