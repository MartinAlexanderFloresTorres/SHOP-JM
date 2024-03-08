import type { Metadata } from 'next';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import InfoTop from './shared/components/InfoTop';
import Header from './shared/components/Header';
import './globals.css';
import 'swiper/css';

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
        <InfoTop>
          <p className="text-white">
            <strong className="text-white">
              ÚNETE A THE BOX <span className="font-normal"> y entérate de las últimas novedades </span>
              <Link href={'/auth/register'} className="text-[#eccb83] block md:inline-block hover:underline transition duration-300 ">
                ➔ REGÍSTRATE AQUÍ
              </Link>
            </strong>
          </p>
        </InfoTop>
        <Header />
        {children}
      </body>
    </html>
  );
}
