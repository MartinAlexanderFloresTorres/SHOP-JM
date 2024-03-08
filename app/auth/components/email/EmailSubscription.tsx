import './EmailSubscription.css';

export default function EmailSubscription() {
  return (
    <div className="formulario">
      <div className="formulario__container">
        <div className="formulario__top">
          <h2>Déjanos tu email</h2>
          <p>Para informarte nuestras ofertas y nuevos productos</p>
        </div>

        <form className="formulario__form">
          <input type="email" name="email-subscription" placeholder="Suscríbete a nuestra lista de correo" />
          <button type="submit" title="Suscribir">
            <svg aria-hidden="true" focusable="false" stroke="currentColor" strokeWidth="5.5" role="presentation" viewBox="0 0 64 64">
              <path d="M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
