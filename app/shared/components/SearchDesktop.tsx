import { useRouter } from 'next/navigation';
import Search from '@shared/components/ui/Search';

export default function SearchDesktop() {
  const navigate = useRouter();

  return (
    <>
      <Search
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
    </>
  );
}
