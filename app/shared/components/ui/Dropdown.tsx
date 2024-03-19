'use client';

import { useState } from 'react';
import { IoChevronDownOutline } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

export interface DropdownProps {
  active?: boolean;
  title: string | React.ReactNode;
  classButton?: string;
  classContainer?: string;
  classContent?: string;
  children: React.ReactNode;
}

export default function Dropdown({ active = false, title, children, classButton, classContainer, classContent }: DropdownProps) {
  const [isActive, setIsActive] = useState(active);

  return (
    <div className={twMerge('w-full', classContainer)}>
      <button title={isActive ? 'Contraer' : 'Desplegar'} className={twMerge('py-4 font-bold border-b border-gray-200 w-full flex justify-between items-center gap-4', classButton)} onClick={() => setIsActive(!isActive)}>
        <div className="uppercase text-sm">{title}</div>

        <IoChevronDownOutline className={twMerge('transition duration-300 transform', isActive ? 'rotate-180' : 'rotate-0')} size={24} />
      </button>

      <div className={twMerge('overflow-hidden transition-all duration-300', isActive ? 'max-h-[1000px]' : 'max-h-0')} style={{ maxHeight: isActive ? '1000px' : '0' }} aria-hidden={!isActive} role="region" aria-live="polite" aria-atomic="true">
        <div className={twMerge('py-4 border-b border-gray-200', classContent)}>{children}</div>
      </div>
    </div>
  );
}
