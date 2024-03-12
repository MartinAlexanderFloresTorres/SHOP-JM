import ProductList from '@/app/products/components/ProductList';
import CollectionsOfProducts from '@/app/collections/components/CollectionsOfProducts';
import SwiperBanners from '@shared/components/SwiperBanners';
import Banner from '@shared/components/Banner';
import Features from '@shared/components/Features';
import BannerVideo from '@shared/components/BannerVideo';

export default function Page() {
  return (
    <main>
      <SwiperBanners
        banners={[
          {
            id: 1,
            title: 'Hombres',
            theme: 'white',
            banner: {
              type: 'image',
              url: '/img/portadas/portada-hombres.jpg',
            },
            links: [
              {
                id: 1,
                color: 'white',
                name: 'Ver Más',
                url: `/collections/1`,
              },
            ],
          },
          {
            id: 2,
            title: 'Mujeres',
            theme: 'white',
            banner: {
              type: 'image',
              url: '/img/portadas/portada-mujeres.jpg',
            },
            links: [
              {
                id: 1,
                color: 'white',
                name: 'Ver Más',
                url: `/collections/1`,
              },
            ],
          },
          {
            id: 3,
            title: 'Accesorios',
            theme: 'white',
            banner: {
              type: 'image',
              url: '/img/portadas/portada-accesorios.webp',
            },
            links: [
              {
                id: 1,
                color: 'white',
                name: 'Ver Más',
                url: `/collections/1`,
              },
            ],
          },
        ]}
      />
      <Features />

      <Banner title="Nuevas colecciónes" description="Primavera / Verano / 2022." image="https://tienda-de-white.netlify.app/img/banner-2.jpg" links={[{ color: 'white', name: 'Ver todas las colecciones', url: '/collections', id: '1' }]} />
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

      <BannerVideo title="Camisetas para mujeres" description="Hemos nacido para ser libres y así es como nos gusta vivir. Nuestra vida es nuestra, de nadie mas. Quiérela tanto como puedas, disfrútala. No dejes que nadie te robe tu libertad." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664158723/videos_colecciones/b1zxtzywvogux2b3ehop.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Mejora tu estilo" description="La moda es un arte, y como tal, es una forma de expresión. No hay reglas, solo hay que saber llevarlas." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664159466/videos_colecciones/nmdrksqblkknpikufs6i.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Exprime cada momento de tu vida" description="Deja huella en ti, que tu vida no pase desapercibida. Disfruta, se libre!!" video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664231042/videos_colecciones/qdfq7coa6c8ahudqxjdf.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Disfruta el proceso" description="Deja huella en ti, que tu vida no pase desapercibida. Disfruta, se libre!!" video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667014247/videos_colecciones/nuz1sb3jtu3zjqjszdbz.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="100% amante al deporte" description="El deporte es para nosotros una forma de expresión de libertad. El deporte te hace sentir libre, la adrenalina te hace sentir vivo." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015177/videos_colecciones/rfwzxouycmonqcbaj6fp.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Sonrrie la vida es maravillosa" description="A veces dura, pero siempre bonita e increíble. Disfruta la aventura de vivir." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664161064/videos_colecciones/rawi5k2ctyitwqpc6dqe.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Consigue tus gafas hoy mismo" description="Una colección especial de Gafas de Sol creada por nuestro Equipo de Surf Femeninos y Masculinos." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015239/videos_colecciones/haday9zfxukwmk9jkn0b.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Zapatillas para todo los gustos y estilos de vida" description="Cada día es una nueva aventura, y para vivirla necesitas unas buenas zapatillas y No importa el deporte que practiques, o el estilo que busques, tenemos lo que necesitas." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015342/videos_colecciones/e5daofypsq2i4ghqmb8p.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '/collections/1', id: '1' }]} />
      <ProductList />
    </main>
  );
}
