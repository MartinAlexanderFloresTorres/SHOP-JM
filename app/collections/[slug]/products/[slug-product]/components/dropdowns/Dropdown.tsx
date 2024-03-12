'use client';
import { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { twMerge } from 'tailwind-merge';
import { Dropdown as DropdownType } from '../../interfaces/dropdown';

interface DropdownProps {
  item: DropdownType;
}

export default function Dropdown({ item }: DropdownProps) {
  const [showMenuItem, setShowMenuItem] = useState(false);

  const handleShowMenuItem = () => {
    setShowMenuItem(!showMenuItem);
  };

  return (
    <div className="border-t border-gray-300">
      <button className="w-full flex justify-between p-4 text-sm font-semibold" onClick={handleShowMenuItem}>
        <div className="flex items-center gap-2">
          <item.icon className="text-2xl" />

          <span>{item.title}</span>
        </div>

        {showMenuItem ? <LuMinus /> : <LuPlus />}
      </button>
      <div className={twMerge('transition-all duration-300 ease-in-out', showMenuItem ? 'max-h-[900px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden')}>
        {item.items.map(({ title, descriptions, id }) => (
          <div key={id} className="pb-4">
            {title && <h3 className="font-semibold text-[16px] px-8 ml-12 mb-3 pl-0">{title}</h3>}
            <div className="ml-16">
              <ul>
                {descriptions.map(({ value, id }) => (
                  <li className="list-disc text-sm" key={id}>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {item.itemChildren && item.itemChildren}
      </div>
    </div>
  );
}
