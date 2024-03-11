'use client';

import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { IoClose, IoSearch } from 'react-icons/io5';
import Modal from '@shared/components/ui/Modal';

const options = [
  { value: 'price-desc', label: 'Precio: Mayor a Menor' },
  { value: 'price-asc', label: 'Precio: Menor a Mayor' },
  { value: 'newest', label: 'Más Recientes' },
  { value: 'oldest', label: 'Más Antiguos' },
  { value: 'popular', label: 'Más Populares' },
  { value: 'less-popular', label: 'Menos Populares' },
  { value: 'best-selling', label: 'Más Vendidos' },
  { value: 'less-selling', label: 'Menos Vendidos' },
  { value: 'discount', label: 'Mayor Descuento' },
  { value: 'rating', label: 'Mayor Rating' },
  { value: 'stock', label: 'Mayor Stock' },
  { value: 'views', label: 'Mayor Vistas' },
];

const customStyles: StylesConfig = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    color: 'black',
    ':active': {
      outline: 'none',
    },
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? 'black' : 'white',
      color: isFocused ? 'white' : 'black',
      ':active': {
        backgroundColor: isFocused ? 'black' : 'white',
        color: isFocused ? 'white' : 'black',
      },
    };
  },
};

export default function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <>
      <section className="bg-white border-b border-b-gray-200 sticky top-0 z-40">
        <div className="container flex items-center justify-between gap-10 p-4">
          <button className="flex items-center gap-2" onClick={toggleFilters}>
            <svg width="23" height="19" viewBox="0 0 20 20" strokeWidth="1.25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1" y1="6" x2="19" y2="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
              <line x1="1" y1="14" x2="19" y2="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
              <circle cx="7" cy="6" r="3" fill="none" stroke="currentColor"></circle>
              <circle cx="13" cy="14" r="3" fill="none" stroke="currentColor"></circle>
            </svg>
            <span className="font-semibold">Filtrar</span>
          </button>

          <form className="hidden lg:flex items-center gap-2 relative max-w-[500px] w-full h-fit">
            <input type="text" placeholder="Buscar en esta colección" className="w-full pl-4 py-3 pr-14 font-normal text-gray-500 placeholder:text-gray-400 border border-gray-200 rounded-full focus-visible:outline-none focus-visible:border-gray-300 transition-colors" />
            <button type="submit" className="absolute to-50% right-1 bg-black bg-opacity-100 text-white hover:bg-opacity-70 transition-all w-10 h-10 flex items-center justify-center rounded-full focus-visible:outline-none" aria-label="Search">
              <IoSearch className="text-2xl" />
            </button>
          </form>

          <Select placeholder="Ordenar Por" options={options} className="ml-auto w-[260px] z-20 text-nowrap" styles={customStyles} />
        </div>
      </section>

      <form className="flex lg:hidden items-center gap-2 relative w-full h-fit mx-auto">
        <input type="text" placeholder="Buscar" className="bg-transparent w-full pl-4 py-3 pr-[70px] font-normal text-[26px] text-black placeholder:text-gray-500 border-b focus-visible:outline-none focus-visible:border-black transition-colors" />
        <button type="submit" className="absolute to-50% right-0 text-black hover:bg-opacity-70 transition-all flex items-center justify-center w-[70px] focus-visible:outline-none" aria-label="Search">
          <IoSearch className="text-2xl" />
        </button>
      </form>

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
          <div>
            <h3 className="font-semibold text-[16px]">Categorías</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">Polos</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">Pantalones</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">Zapatos</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">Accesorios</span>
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[16px]">Tallas</h3>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">S</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">M</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5" />
                <span className="font-normal text-[14px]">L</span>
              </label>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
