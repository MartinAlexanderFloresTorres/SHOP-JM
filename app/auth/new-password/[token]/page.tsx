import { Metadata } from 'next';
import InfoTop from '@/app/shared/components/InfoTop';

export const metadata: Metadata = {
  title: 'Nueva contraseña',
  description: 'Ingresa tu nueva contraseña de Tienda Store',
};

export default function page() {
  return (
    <>
      <InfoTop>Tienda Store</InfoTop>
      <div className="form container">
        <h2 className="form__title">Ingresa tu nueva contraseña</h2>

        <form className="form__form">
          <div className="form__grid">
            <div className="form__grid__item">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="form__grid__item">
              <label htmlFor="password2">Confirmar Password</label>
              <input type="password" id="password2" />
            </div>
          </div>

          <button type="submit" className="btn btn-black w-full mb-10">
            Crear Nueva Contraseña
          </button>
        </form>
      </div>
    </>
  );
}
