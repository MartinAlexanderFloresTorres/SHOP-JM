import ProductList from './products/components/ProductList';
import SwiperBanners from './shared/components/SwiperBanners';

export default function Page() {
  return (
    <main>
      <SwiperBanners />
      <ProductList />
    </main>
  );
}
