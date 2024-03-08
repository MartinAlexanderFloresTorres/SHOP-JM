import React, { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import InfoTop from './InfoTop';

export default function SearchMovil() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen(!isOpen);
  return (
    <>
      <button type="button" className="flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Search" onClick={toggleSearch}>
        <IoSearch className="text-2xl" />
      </button>

      {isOpen && (
        <section className="fixed inset-0 z-50 flex flex-col w-full h-full bg-white animate-fade-in">
          <InfoTop>Comienza a buscar tus productos</InfoTop>
          <div className="flex justify-end items-centers w-full p-2">
            <button type="button" className="flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Close" onClick={toggleSearch}>
              <IoClose className="text-4xl" />
            </button>
          </div>
          <div className="w-full flex-1">
            <div className="w-full overflow-auto">
              <form className="flex items-center gap-2 relative w-[70%] h-fit mx-auto">
                <input type="text" placeholder="Buscar" className="w-full pl-6 py-4 pr-16 font-normal text-gray-500 placeholder:text-gray-400 border border-gray-200 rounded-full focus-visible:outline-none focus-visible:border-gray-300 transition-colors" />
                <button type="submit" className="absolute to-50% right-1 bg-black bg-opacity-100 text-white hover:bg-opacity-70 transition-all w-12 h-12 flex items-center justify-center rounded-full focus-visible:outline-none" aria-label="Search">
                  <IoSearch className="text-2xl" />
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
