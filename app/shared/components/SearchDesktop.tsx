import { IoSearch } from 'react-icons/io5';

export default function SearchDesktop() {
  return (
    <>
      <form className="flex items-center gap-2 relative w-[400px] h-fit mx-auto">
        <input type="text" placeholder="Buscar" className="w-full pl-4 py-3 pr-12 font-normal text-gray-500 placeholder:text-gray-400 border border-gray-200 rounded-full focus-visible:outline-none focus-visible:border-gray-300 transition-colors" />
        <button type="submit" className="absolute to-50% right-1 bg-black bg-opacity-100 text-white hover:bg-opacity-70 transition-all w-10 h-10 flex items-center justify-center rounded-full focus-visible:outline-none" aria-label="Search">
          <IoSearch className="text-2xl" />
        </button>
      </form>
    </>
  );
}
