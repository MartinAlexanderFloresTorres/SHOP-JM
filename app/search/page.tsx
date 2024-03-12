'use client';
import Select from 'react-select';
import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Product from '@/app/products/components/Product';
import { customStylesSelect } from '@shared/constants/custom-styles-select';
import Banner from '@shared/components/Banner';
import Search from '@shared/components/ui/Search';
import Filter from '@shared/components/Filter';

function SearchPage() {
  const params = useSearchParams();
  const navigate = useRouter();
  return (
    <>
      <Banner classContainer="h-full flex flex-col items-center justify-center mx-auto" classTitle="text-center" classDescription="text-center" title="Busca tus productos" description="Encuentra los productos que necesitas para tu hogar." image="/img/banner-search.jpg">
        <Search
          value={params.get('q') || ''}
          valueCategory={params.get('category') || 'todos'}
          classContainer="max-w-[700px] z-[60]"
          onChange={({ search, category }) => {
            navigate.push(`/search?q=${search}${category ? `&category=${category}` : ''}`);
          }}
          placeholderSearch="Buscar productos..."
          placeholderSelect="Categoría"
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
        />
      </Banner>

      <section className="bg-white border-b border-b-gray-200">
        <div className="container flex items-center justify-between gap-10 p-4">
          <div className="flex items-center justify-start gap-6 w-full">
            <Filter
              options={[
                {
                  id: '1',
                  title: 'Categorías',
                  disabled: false,
                  items: [
                    {
                      id: '1',
                      name: 'Option 1',
                      value: '1',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '2',
                  title: 'Tallas',
                  disabled: false,
                  items: [
                    {
                      id: '2',
                      name: 'Option 2',
                      value: '2',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '3',
                  title: 'Colores',
                  disabled: false,
                  items: [
                    {
                      id: '3',
                      name: 'Option 3',
                      value: '3',
                      type: 'radio',
                    },
                  ],
                },
                {
                  id: '4',
                  title: 'Marcas',
                  disabled: false,
                  items: [
                    {
                      id: '4',
                      name: 'Option 4',
                      value: '4',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '5',
                  title: 'Precios',
                  disabled: false,
                  items: [
                    {
                      id: '5',
                      name: 'Option 5',
                      value: '5',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '6',
                  title: 'Descuentos',
                  disabled: false,
                  items: [
                    {
                      id: '6',
                      name: 'Option 6',
                      value: '6',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '7',
                  title: 'Rating',
                  disabled: false,
                  items: [
                    {
                      id: '7',
                      name: 'Option 7',
                      value: '7',
                      type: 'checkbox',
                    },
                  ],
                },
                {
                  id: '8',
                  title: 'Stock',
                  disabled: false,
                  items: [
                    {
                      id: '8',
                      name: 'Option 8',
                      value: '8',
                      type: 'checkbox',
                    },
                  ],
                },
              ]}
            />
          </div>

          <Select
            placeholder="Ordenar Por"
            options={[
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
            ]}
            className="ml-auto w-[260px] z-20 text-nowrap"
            styles={customStylesSelect}
          />
        </div>
      </section>

      <section className="container grid gap-4 p-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </>
  );
}

export default function Page() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}
