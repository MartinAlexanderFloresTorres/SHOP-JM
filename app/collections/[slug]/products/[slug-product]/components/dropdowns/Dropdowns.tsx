'use client';
import { Dropdown as DropdownType } from '../../interfaces/dropdown';
import Dropdown from './Dropdown';

interface DropdownsProps {
  items: DropdownType[];
}

export default function Dropdowns({ items }: DropdownsProps) {
  return (
    <div className="last:border-b last:border-gray-300">
      {items.map((item, index) => (
        <Dropdown key={index} item={item} />
      ))}
    </div>
  );
}
