import SwiperBanners from './shared/components/SwiperBanners';
import Banner from './shared/components/Banner';
import ProductList from './products/components/ProductList';
import BannerVideo from './shared/components/BannerVideo';
import Categories from './categories/components/Categories';
import ShalomServices from './shared/components/shalom/ShalomServices';

export default function Page() {
  return (
    <main>
      <SwiperBanners />
      <ShalomServices />
      <Banner title="Nuevas colecciónes" description="Primavera / Verano / 2022." image="https://tienda-de-white.netlify.app/img/banner-2.jpg" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <Categories
        categories={[
          { id: 1, name: 'Hombre' },
          { id: 2, name: 'Mujer' },
          { id: 3, name: 'Niños' },
          { id: 4, name: 'Accesorios' },
          { id: 5, name: 'Deporte' },
          { id: 6, name: 'Zapatos' },
          { id: 7, name: 'Ropa Interior' },
          { id: 8, name: 'Gafas' },
        ]}
      />

      <BannerVideo title="Camisetas para mujeres" description="Hemos nacido para ser libres y así es como nos gusta vivir. Nuestra vida es nuestra, de nadie mas. Quiérela tanto como puedas, disfrútala. No dejes que nadie te robe tu libertad." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664158723/videos_colecciones/b1zxtzywvogux2b3ehop.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Mejora tu estilo" description="La moda es un arte, y como tal, es una forma de expresión. No hay reglas, solo hay que saber llevarlas." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664159466/videos_colecciones/nmdrksqblkknpikufs6i.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Exprime cada momento de tu vida" description="Deja huella en ti, que tu vida no pase desapercibida. Disfruta, se libre!!" video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664231042/videos_colecciones/qdfq7coa6c8ahudqxjdf.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Disfruta el proceso" description="Deja huella en ti, que tu vida no pase desapercibida. Disfruta, se libre!!" video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667014247/videos_colecciones/nuz1sb3jtu3zjqjszdbz.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="100% amante al deporte" description="El deporte es para nosotros una forma de expresión de libertad. El deporte te hace sentir libre, la adrenalina te hace sentir vivo." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015177/videos_colecciones/rfwzxouycmonqcbaj6fp.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Sonrrie la vida es maravillosa" description="A veces dura, pero siempre bonita e increíble. Disfruta la aventura de vivir." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1664161064/videos_colecciones/rawi5k2ctyitwqpc6dqe.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Consigue tus gafas hoy mismo" description="Una colección especial de Gafas de Sol creada por nuestro Equipo de Surf Femeninos y Masculinos." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015239/videos_colecciones/haday9zfxukwmk9jkn0b.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />

      <BannerVideo title="Zapatillas para todo los gustos y estilos de vida" description="Cada día es una nueva aventura, y para vivirla necesitas unas buenas zapatillas y No importa el deporte que practiques, o el estilo que busques, tenemos lo que necesitas." video="https://res.cloudinary.com/dcj09lsnh/video/upload/v1667015342/videos_colecciones/e5daofypsq2i4ghqmb8p.mp4" links={[{ color: 'white', name: 'Ver Productos', url: '#', id: '1' }]} />
      <ProductList />
    </main>
  );
}
