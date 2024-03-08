import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: 'Inicia sesión en tu cuenta de Tienda Store',
};

export default function Page() {
  return (
    <div className="form container">
      <h2 className="form__title">Iniciar sesión</h2>

      <form className="form__form">
        <div className="form__grid__item">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form__grid__item">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <Link href="/auth/recover" className="form__link">
          ¿Olvidaste tu contraseña?
        </Link>
        <button type="submit" className="btn btn-black w-full mb-10">
          Iniciar sesión
        </button>
        <Link href="/auth/register" className="btn btn-black-2 w-full mb-20">
          No tienes cuenta? Registrate
        </Link>
        <Link href="/" className="form__link mx-auto">
          Regresar
        </Link>
      </form>
    </div>
  );
}
