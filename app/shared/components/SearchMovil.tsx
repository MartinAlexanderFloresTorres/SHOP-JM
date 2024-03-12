import { useState } from 'react';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import Modal from '@shared/components/ui/Modal';
import { useRouter } from 'next/navigation';
import Search from '@shared/components/ui/Search';

export default function SearchMovil() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useRouter();

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
          <Search
            classContainer="mx-auto max-w-full"
            options={[
              { value: 'todos', label: 'todos' },
              { value: 'hombre', label: 'hombre' },
              { value: 'mujer', label: 'mujer' },
              { value: 'niño', label: 'niño' },
              { value: 'niña', label: 'niña' },
              { value: 'bebe', label: 'bebe' },
              { value: 'accesorios', label: 'accesorios' },
              { value: 'zapatos', label: 'zapatos' },
              { value: 'ropa', label: 'ropa' },
              { value: 'deportes', label: 'deportes' },
              { value: 'tecnología', label: 'tecnología' },
              { value: 'hogar', label: 'hogar' },
              { value: 'muebles', label: 'muebles' },
              { value: 'electrodomésticos', label: 'electrodomésticos' },
              { value: 'mascotas', label: 'mascotas' },
              { value: 'juguetes', label: 'juguetes' },
            ]}
            placeholderSearch="Buscar productos..."
            placeholderSelect="Categoría"
            onChange={({ search, category }) => {
              console.log({ search, category });
              navigate.push(`/search?q=${search}${category ? `&category=${category}` : ''}`);
            }}
          />
        </Modal>
      )}
    </>
  );
}
