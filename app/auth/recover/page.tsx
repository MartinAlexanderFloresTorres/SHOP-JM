import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recuperar contraseña',
  description: 'Recupera tu contraseña de Tienda Store',
};

export default function Page() {
  return (
    <div className="form container">
      <h2 className="form__title">Recuperar contraseña</h2>

      <form className="form__form">
        <div className="form__grid__item">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" />
        </div>

        <button type="submit" className="btn btn-black w-full mb-20">
          Enviar correo de recuperación
        </button>
        <Link href="/auth/register" className="form__link mx-auto mb-20">
          Quieres una nueva cuenta? Registrate
        </Link>
        <Link href="/" className="form__link mx-auto">
          Ir al inicio
        </Link>
      </form>
    </div>
  );
}
