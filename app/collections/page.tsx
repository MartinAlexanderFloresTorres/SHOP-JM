import Banner from '@shared/components/Banner';
import CollectionsOfProducts from './components/CollectionsOfProducts';

export default function Page() {
  return (
    <div>
      <Banner title="Nuevas colecciónes" description="Primavera / Verano / 2022." image="https://tienda-de-white.netlify.app/img/banner-2.jpg" />
      <CollectionsOfProducts
        categories={[
          {
            id: 1,
            name: 'Hombre',
            description: 'Colección de ropa para hombre.',
            file: {
              type: 'image',
              url: '/categoria-1.png',
            },
            url: '/collections/1',
            products: [
              {
                id: 1,
                name: 'Camisa de hombre',
                description: 'Camisa de hombre de color azul.',
                price: 100,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-1-1.jpg' },
                  { id: 2, url: '/producto-1-2.jpg' },
                  { id: 3, url: '/producto-1-3.jpg' },
                ],
                url: '/collections/1/products/1',
              },
              {
                id: 2,
                name: 'Pantalón de hombre',
                description: 'Pantalón de hombre de color azul.',
                price: 150,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-2-1.jpg' },
                  { id: 2, url: '/producto-2-2.jpg' },
                  { id: 3, url: '/producto-2-3.jpg' },
                ],
                url: '/collections/1/products/2',
              },
              {
                id: 3,
                name: 'Zapatos de hombre',
                description: 'Zapatos de hombre de color azul.',
                price: 200,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-3-1.jpg' },
                  { id: 2, url: '/producto-3-2.jpg' },
                  { id: 3, url: '/producto-3-3.jpg' },
                ],
                url: '/collections/1/products/3',
              },
              {
                id: 4,
                name: 'Reloj de hombre',
                description: 'Reloj de hombre de color azul.',
                price: 250,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-4-1.jpg' },
                  { id: 2, url: '/producto-4-2.jpg' },
                  { id: 3, url: '/producto-4-3.jpg' },
                ],
                url: '/collections/1/products/4',
              },
            ],
          },
          {
            id: 2,
            name: 'Mujer',
            description: 'Colección de ropa para mujer.',
            file: {
              type: 'image',
              url: '/categoria-1.png',
            },
            url: '/collections/2',
            products: [
              {
                id: 5,
                name: 'Camisa de mujer',
                description: 'Camisa de mujer de color azul.',
                price: 100,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-5-1.jpg' },
                  { id: 2, url: '/producto-5-2.jpg' },
                  { id: 3, url: '/producto-5-3.jpg' },
                ],
                url: '/collections/2/products/5',
              },
              {
                id: 6,
                name: 'Pantalón de mujer',
                description: 'Pantalón de mujer de color azul.',
                price: 150,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-6-1.jpg' },
                  { id: 2, url: '/producto-6-2.jpg' },
                  { id: 3, url: '/producto-6-3.jpg' },
                ],
                url: '/collections/2/products/6',
              },
              {
                id: 7,
                name: 'Zapatos de mujer',
                description: 'Zapatos de mujer de color azul.',
                price: 200,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-7-1.jpg' },
                  { id: 2, url: '/producto-7-2.jpg' },
                  { id: 3, url: '/producto-7-3.jpg' },
                ],
                url: '/collections/2/products/7',
              },
              {
                id: 8,
                name: 'Reloj de mujer',
                description: 'Reloj de mujer de color azul.',
                price: 250,
                discount: 0,
                stock: 10,
                images: [
                  { id: 1, url: '/producto-8-1.jpg' },
                  { id: 2, url: '/producto-8-2.jpg' },
                  { id: 3, url: '/producto-8-3.jpg' },
                ],
                url: '/collections/2/products/8',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
