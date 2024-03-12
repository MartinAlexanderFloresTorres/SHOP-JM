import { IconType } from 'react-icons';

export interface Dropdown {
  id: string | number;
  title: string;
  icon: IconType;
  items: DropdownItem[];
  itemChildren?: React.ReactNode;
}
export interface DropdownItem {
  id: string | number;
  title?: string;
  descriptions: DropdownDescription[];
}

export interface DropdownDescription {
  id: string | number;
  value: string | React.ReactNode;
}
