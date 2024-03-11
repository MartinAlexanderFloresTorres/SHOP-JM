'use client';
import Banner from '@/app/shared/components/Banner';
import Filters from '@/app/collections/components/Filters';
import Product from '@/app/products/components/Product';

export default function page() {
  return (
    <div>
      <Banner
        title="Collections"
        description="Discover the best collections of the world."
        image="https://source.unsplash.com/1600x900/?collections"
        links={[
          {
            id: '1',
            color: 'white',
            name: 'Shop Now',
            url: '/collections',
          },
        ]}
      />

      <Filters />

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
    </div>
  );
}
