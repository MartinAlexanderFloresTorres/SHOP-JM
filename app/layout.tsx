import type { Metadata } from 'next';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import Header from '@shared/components/Header';
import Footer from '@shared/components/Footer';
import TranslateTop from '@shared/components/TranslateTop';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

const font = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: 'Store | Te da la bienvenida',
  description: 'La mejor tienda en línea de Perú',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <TranslateTop
          clasNameContainer="bg-black"
          items={[
            {
              id: 1,
              children: (
                <p className="text-white text-center">
                  <strong className="text-white">
                    <span className="uppercase">Únete a THE BOX</span>
                    <span className="font-normal"> y entérate de las últimas novedades </span>
                    <Link href={'/auth/register'} className="text-[#eccb83] block md:inline-block hover:underline transition duration-300 ">
                      ➔ REGÍSTRATE AQUÍ
                    </Link>
                  </strong>
                </p>
              ),
            },
            {
              id: 2,
              children: (
                <p className="text-white text-center">
                  <strong className="text-white">
                    <span className="uppercase">Envio Gratis </span>
                    <span className="font-normal">
                      a partir de <span className="text-[#eccb83] font-bold">S/. 100 </span> soles
                    </span>
                  </strong>
                </p>
              ),
            },
            {
              id: 3,
              children: (
                <p className="text-white text-center">
                  <strong className="text-white">
                    <span className="uppercase">Envio Rapido </span>
                    <span className="font-normal">
                      recibe tu pedido al instante por <span className="font-bold">shalom </span>
                    </span>
                    <Link href={'/shalom'} className="text-[#eccb83] block md:inline-block hover:underline transition duration-300 ">
                      ➔ Conoce Más
                    </Link>
                  </strong>
                </p>
              ),
            },
          ]}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
