'use client';

import { useState } from 'react';
import Select, { StylesConfig } from 'react-select';
import { IoChevronBackSharp, IoChevronForwardSharp, IoSearch } from 'react-icons/io5';

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
    <section className="bg-white border-b border-b-gray-200 sticky top-0 z-50">
      <div className="container flex items-center justify-between gap-10 p-4">
        <button className="flex items-center gap-2" onClick={toggleFilters}>
          <svg width="23" height="19" viewBox="0 0 20 20" strokeWidth="1.25" fill="none" xmlns="http://www.w3.org/2000/svg">
            {showFilters ? (
              <>
                <line x1="1" y1="6" x2="19" y2="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="1" y1="14" x2="19" y2="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                <circle cx="7" cy="6" r="3" fill="none" stroke="currentColor"></circle>
                <circle cx="13" cy="14" r="3" fill="none" stroke="currentColor"></circle>
              </>
            ) : (
              <>
                <line x1="1" y1="6" x2="19" y2="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                <line x1="1" y1="14" x2="19" y2="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                <circle cx="7" cy="6" r="3" fill="none" stroke="currentColor"></circle>
                <circle cx="13" cy="14" r="3" fill="none" stroke="currentColor"></circle>
              </>
            )}
          </svg>
          <span className="font-semibold">Filtrar:</span>
          <IoChevronForwardSharp className={`transform ${showFilters ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
        </button>

        <form className="hidden md:flex items-center gap-2 relative max-w-[500px] w-full h-fit">
          <input type="text" placeholder="Buscar en esta colección" className="w-full pl-4 py-3 pr-14 font-normal text-gray-500 placeholder:text-gray-400 border border-gray-200 rounded-full focus-visible:outline-none focus-visible:border-gray-300 transition-colors" />
          <button type="submit" className="absolute to-50% right-1 bg-black bg-opacity-100 text-white hover:bg-opacity-70 transition-all w-10 h-10 flex items-center justify-center rounded-full focus-visible:outline-none" aria-label="Search">
            <IoSearch className="text-2xl" />
          </button>
        </form>

        <Select placeholder="Ordenar Por" options={options} className="ml-auto w-[260px] z-20 text-nowrap" styles={customStyles} />
      </div>

      {showFilters && (
        <div className="fixed inset-0 z-20 bg-white w-full h-full transition-all animate-fade-in overflow-auto">
          <div className="flex items-center justify-between gap-4 sticky bg-white border-b border-b-gray-200 top-0 z-10 p-4">
            <div className="flex items-center gap-4">
              <button className="bg-black text-white border-2 border-white p-3 rounded-full focus-visible:outline-none focus-visible:outline-offset-1 focus-visible:outline-red-400 transition-all hover:bg-opacity-70" onClick={toggleFilters} aria-label="Cerrar Filtros">
                <IoChevronBackSharp className="text-xl" />
              </button>
              <h2 className="font-semibold text-[18px]">Filtros</h2>
            </div>
            <button className="text-gray-400 font-semibold text-xs">Limpiar Filtros</button>
          </div>
          <div className="flex flex-col gap-4 mt-4 p-4">
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
          </div>
        </div>
      )}
    </section>
  );
}
