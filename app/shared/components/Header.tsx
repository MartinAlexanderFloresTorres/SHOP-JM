'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { TbShoppingCart } from 'react-icons/tb';
import { twMerge } from 'tailwind-merge';
import SearchMovil from './SearchMovil';
import SearchDesktop from './SearchDesktop';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white px-8 py-2 border-b border-slate-100">
        {/* desktop */}
        <nav className="hidden lg:flex items-center justify-between gap-5 container">
          <Link href="/" className="block w-14 h-14 min-w-14 min-h-14">
            <img width="60" height="60" className="w-full h-full" src="/logo.avif" alt="logo" />
          </Link>
          <div className="flex-1 flex items-center">
            <nav className="flex items-center gap-5 font-medium flex-1">
              <Link href="/shop" className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Hombre</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href="/shop" className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Mujer</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href="/shop" className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Calzado</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href="/shop" className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
                <span>Niños</span>
                <svg width={9} height={9} aria-hidden="true" focusable="false" role="presentation" className="icon icon-chevron-down" viewBox="0 0 9 9">
                  <path d="M8.542 2.558a.625.625 0 0 1 0 .884l-3.6 3.6a.626.626 0 0 1-.884 0l-3.6-3.6a.625.625 0 1 1 .884-.884L4.5 5.716l3.158-3.158a.625.625 0 0 1 .884 0z" fill="text-[#3a3a3a]"></path>
                </svg>
              </Link>
              <Link href="/shop" className={twMerge('flex items-center gap-2 text-nowrap text-black hover:text-gray-400 transition-all')}>
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
        <nav className="lg:hidden grid grid-cols-3 items-center gap-5 container">
          <div className="mr-auto flex items-center gap-5">
            <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center transition-all" onClick={toggleMenu}>
              <span className="w-[30px] h-[30px] relative transition-all">
                <span
                  className={'transition-all absolute w-[23px] h-[2px] top-[6px] left-[3px] bg-black'}
                  style={{
                    transform: isOpen ? 'rotate(45deg) translate3d(6px, 5.5px, 0)' : 'rotate(0) translate3d(0, 0, 0)',
                  }}
                ></span>
                <span className={twMerge('transition-all absolute w-[23px] h-[2px] top-[14px] left-[3px] bg-black', isOpen ? 'opacity-0' : 'opacity-100')}></span>
                <span
                  className={'transition-all absolute w-[23px] h-[2px] top-[22px] left-[3px] bg-black'}
                  style={{
                    transform: isOpen ? 'rotate(-45deg) translate3d(5.5px,-5px,0)' : 'rotate(0) translate3d(0, 0, 0)',
                  }}
                ></span>
              </span>

              <span className="hidden">Menú</span>
            </button>
            <SearchMovil />
          </div>

          <Link href="/" className="block mx-auto w-14 h-14 min-w-14 min-h-14">
            <img width="60" height="60" className="w-full h-full" src="/logo.avif" alt="logo" />
          </Link>

          <div className="ml-auto flex items-center gap-5">
            <Link href="/cart" className="w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Cart">
              <TbShoppingCart className="text-2xl" strokeWidth={2} />
            </Link>
            <Link href="/cart" className="w-[30px] h-[30px] flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="User">
              <FaRegUser className="text-2xl" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
