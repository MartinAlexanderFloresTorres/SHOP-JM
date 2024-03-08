import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crear cuenta',
  description: 'Crea tu cuenta de Tienda Store',
};

export default function Page() {
  return (
    <div className="form container">
      <h2 className="form__title">Crear cuenta</h2>

      <form className="form__form">
        <div className="form__grid">
          <div className="form__grid__item">
            <label htmlFor="name">Nombre</label>
            <input type="name" id="name" name="name" />
          </div>

          <div className="form__grid__item">
            <label htmlFor="surnames">Apellidos</label>
            <input type="surnames" id="surnames" name="surnames" />
          </div>
        </div>

        <div className="form__grid__item">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form__grid">
          <div className="form__grid__item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form__grid__item">
            <label htmlFor="passwordConfirmation">Confirmar Password</label>
            <input type="password" id="passwordConfirmation" name="passwordConfirmation" />
          </div>
        </div>

        <button type="submit" className="btn btn-black w-full mb-10">
          Crear cuenta
        </button>
        <Link href="/auth/login" className="btn btn-black-2 w-full mb-20">
          Ya tienes cuenta? Inicia sesión
        </Link>
        <Link href="/" className="form__link mx-auto">
          Ir al inicio
        </Link>
      </form>
    </div>
  );
}
