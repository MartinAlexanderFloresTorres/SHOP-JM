import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Modal from '@shared/components/ui/Modal';

interface OptionItem {
  id: string | number;
  name: string;
  value: string;
  type: 'checkbox' | 'radio';
}

interface Option {
  id: string | number;
  title: string;
  disabled: boolean;
  items: OptionItem[];
}

interface FilterProps {
  options?: Option[];
  optionDisabled?: boolean;
}

export default function Filter({ options = [], optionDisabled }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <>
      <button className="flex items-center gap-2" onClick={toggleFilters}>
        <svg width="23" height="19" viewBox="0 0 20 20" strokeWidth="1.25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="1" y1="6" x2="19" y2="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
          <line x1="1" y1="14" x2="19" y2="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
          <circle cx="7" cy="6" r="3" fill="none" stroke="currentColor"></circle>
          <circle cx="13" cy="14" r="3" fill="none" stroke="currentColor"></circle>
        </svg>
        <span className="font-semibold">Filtrar</span>
      </button>

      {showFilters && (
        <Modal
          IconClose={IoClose}
          onClose={toggleFilters}
          showHeader={true}
          title="Filtros"
          description="Filtrar por categorías, tallas, colores, marcas, precios, descuentos, etc."
          classNameContent="overflow-auto"
          allowCloseOnTouch={true}
          childrenFooter={
            <div className="flex justify-between gap-4">
              <button className="w-full h-12 bg-black text-white font-semibold rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-50 transition-all hover:bg-opacity-70">Aplicar Filtros</button>
              <button className="w-full h-12 bg-white text-black font-semibold border border-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-50 transition-all hover:bg-opacity-70">Limpiar Filtros</button>
            </div>
          }
        >
          {options.map((option) => (
            <div key={option.id}>
              <h3 className="font-semibold text-[16px]">{option.title}</h3>
              <div className="flex flex-col gap-2 mt-2">
                {option.items.map((item) => (
                  <label key={item.id} className="flex items-center gap-2">
                    <input type={item.type} className="w-5 h-5" />
                    <span className="font-normal text-[14px]">{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </Modal>
      )}
    </>
  );
}
