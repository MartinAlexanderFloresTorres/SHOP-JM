import { ChildrenProps } from '../shared/interfaces';
import Footer from './components/footer/Footer';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div>
      {children}

      <Footer />
    </div>
  );
}
