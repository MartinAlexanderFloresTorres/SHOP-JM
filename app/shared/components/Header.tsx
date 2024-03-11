'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { TbShoppingCart } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import SearchMovil from '@shared/components/SearchMovil';
import SearchDesktop from '@shared/components/SearchDesktop';
import Modal from '@shared/components/ui/Modal';
import { IoChevronForward, IoCloseSharp, IoMenuSharp, IoSearch } from 'react-icons/io5';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className={twMerge('sticky top-0 z-50 bg-white px-4 py-2 border-b border-b-gray-200 h-[70px]', pathname.includes('/collections') && 'static')}>
        {/* desktop */}
        <nav className="hidden lg:flex items-center justify-between gap-5 container">
          <Link href="/" className="block w-14 h-14 min-w-14 min-h-14">
            <img width="60" height="60" className="w-full h-full" src="/logo.avif" alt="logo" />
          </Link>
          <div className="flex-1 flex items-center">
            <nav className="flex items-center gap-4 font-medium flex-1">
              <Link href={`/collections/nombre-coleccion`} className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Hombre</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href={`/collections/nombre-coleccion`} className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Mujer</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href={`/collections/nombre-coleccion`} className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Calzado</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href={`/collections/nombre-coleccion`} className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Niños</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href={`/collections/nombre-coleccion`} className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span className="text-[#e32c2b]">Sale 🔥</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <SearchDesktop />
              <Link href="/cart" className="w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Cart">
                <TbShoppingCart className="text-2xl" strokeWidth={2} />
              </Link>
              <Link href="/cart" className="w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="User">
                <FaRegUser className="text-2xl" />
              </Link>
            </div>
          </div>
        </nav>

        {/* movil */}
        <nav className="lg:hidden grid grid-cols-3 items-center gap-3 container">
          <div className="mr-auto flex items-center gap-2">
            <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all" onClick={toggleMenu}>
              <IoMenuSharp className="text-2xl" />
            </button>
            <SearchMovil />
          </div>

          <Link href="/" className="block mx-auto w-14 h-14 min-w-14 min-h-14">
            <img width="60" height="60" className="w-full h-full" src="/logo.avif" alt="logo" />
          </Link>

          <Link href="/cart" className="ml-auto w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Cart">
            <TbShoppingCart className="text-2xl" strokeWidth={2} />
          </Link>
        </nav>
      </header>

      {isOpen && (
        <Modal
          onClose={toggleMenu}
          classNameModal="animate-translate-left-to-right"
          classNameHeader="py-2 h-[70px]"
          classNameContent="p-0 gap-0"
          childrenHeader={
            <div className="grid grid-cols-3 items-center gap-4">
              <button className="mr-auto w-[48px] h-[48px] flex items-center justify-center bg-black text-white border-2 border-white rounded-full focus-visible:outline-none focus-visible:outline-offset-1 focus-visible:outline-red-400 transition-all hover:bg-opacity-70" onClick={toggleMenu} aria-label="Cerrar Filtros">
                <IoCloseSharp className="text-xl" />
              </button>

              <Link href="/" className="block mx-auto w-14 h-14 min-w-14 min-h-14">
                <img width="60" height="60" className="w-full h-full" src="/logo.avif" alt="logo" />
              </Link>

              <Link href="/cart" className="ml-auto w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Cart" onClick={toggleMenu}>
                <TbShoppingCart className="text-2xl" strokeWidth={2} />
              </Link>
            </div>
          }
          childrenFooter={
            <div className="flex justify-between gap-4">
              <button className="w-full h-12 bg-black text-white font-semibold rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-50 transition-all hover:bg-opacity-70" onClick={toggleMenu}>
                Iniciar Sesion
              </button>
              <button className="w-full h-12 bg-white text-black font-semibold border border-black rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-50 transition-all hover:bg-opacity-70" onClick={toggleMenu}>
                Crear Cuenta
              </button>
            </div>
          }
        >
          <form className="flex items-center gap-2 relative w-full h-fit mx-auto">
            <input type="text" placeholder="Buscar" className="bg-transparent w-full pl-4 py-3 pr-[70px] font-normal text-[26px] text-black placeholder:text-gray-500 border-b focus-visible:outline-none focus-visible:border-black transition-colors" />
            <button type="submit" className="absolute to-50% right-0 text-black hover:bg-opacity-70 transition-all flex items-center justify-center w-[70px] focus-visible:outline-none" aria-label="Search">
              <IoSearch className="text-2xl" />
            </button>
          </form>

          <nav className="flex flex-col items-start">
            <div role="button" className="text-2xl flex items-stretch justify-between gap-4 font-semibold text-black hover:text-gray-400 border-b w-full transition-all">
              <Link href={`/collections/nombre-coleccion`} className="p-4" onClick={toggleMenu}>
                <span className="line-clamp-1">Hombre</span>
              </Link>
              <button className="border-l p-4 h-full flex items-center justify-center w-[70px]" onClick={toggleMenu}>
                <IoChevronForward className="text-lg" />
              </button>
            </div>
            <div role="button" className="text-2xl flex items-center justify-between gap-4 font-semibold text-black hover:text-gray-400 border-b w-full transition-all">
              <Link href={`/collections/nombre-coleccion`} className="p-4" onClick={toggleMenu}>
                <span className="line-clamp-1">Mujer</span>
              </Link>
              <button className="border-l p-4 h-full flex items-center justify-center w-[70px]" onClick={toggleMenu}>
                <IoChevronForward className="text-lg" />
              </button>
            </div>
            <div role="button" className="text-2xl flex items-center justify-between gap-4 font-semibold text-black hover:text-gray-400 border-b w-full transition-all">
              <Link href={`/collections/nombre-coleccion`} className="p-4" onClick={toggleMenu}>
                <span className="line-clamp-1">Calzado</span>
              </Link>
              <button className="border-l p-4 h-full flex items-center justify-center w-[70px]" onClick={toggleMenu}>
                <IoChevronForward className="text-lg" />
              </button>
            </div>
            <div role="button" className="text-2xl flex items-center justify-between gap-4 font-semibold text-black hover:text-gray-400 border-b w-full transition-all">
              <Link href={`/collections/nombre-coleccion`} className="p-4" onClick={toggleMenu}>
                <span className="line-clamp-1">Niños</span>
              </Link>
              <button className="border-l p-4 h-full flex items-center justify-center w-[70px]" onClick={toggleMenu}>
                <IoChevronForward className="text-lg" />
              </button>
            </div>
            <div role="button" className="text-2xl flex items-center justify-between gap-4 font-semibold text-black hover:text-gray-400 border-b w-full transition-all">
              <Link href={`/collections/nombre-coleccion`} className="p-4" onClick={toggleMenu}>
                <span className="line-clamp-1">Sale 🔥</span>
              </Link>
              <button className="border-l p-4 h-full flex items-center justify-center w-[70px]" onClick={toggleMenu}>
                <IoChevronForward className="text-lg" />
              </button>
            </div>
          </nav>
        </Modal>
      )}
    </>
  );
}
