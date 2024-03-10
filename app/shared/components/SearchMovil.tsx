import { useState } from 'react';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import Modal from './ui/Modal';

export default function SearchMovil() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => setIsOpen(!isOpen);
  return (
    <>
      <button type="button" className="flex items-center gap-2 text-black hover:text-gray-400 transition-all" aria-label="Search" onClick={toggleSearch}>
        <IoSearch className="text-2xl" />
      </button>

      {isOpen && (
        <Modal onClose={toggleSearch} classNameModal="bg-white" classNameContent="p-6 item-center justify-center">
          <button type="button" className="absolute top-2 right-2 flex items-center gap-2 text-gray-500 hover:text-black transition-all" aria-label="Close" onClick={toggleSearch}>
            <IoCloseSharp className="text-4xl" />
          </button>
          <form className="flex items-center gap-2 relative w-full h-fit mx-auto">
            <input type="text" placeholder="Buscar" className="bg-transparent w-full pl-4 py-3 pr-16 font-normal text-[26px] text-black placeholder:text-gray-500 border-b focus-visible:outline-none focus-visible:border-black transition-colors" />
            <button type="submit" className="absolute to-50% right-0 text-black hover:bg-opacity-70 transition-all flex items-center justify-center w-[70px] focus-visible:outline-none" aria-label="Search">
              <IoSearch className="text-2xl" />
            </button>
          </form>
        </Modal>
      )}
    </>
  );
}
