import { LinkBlack } from '@shared/components/ui/Links';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4 md:p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">Pagina no encontrada</h2>
        <p className="text-gray-600 mb-4 text-sm">La pagina que buscas no existe o fue removida.</p>
        <LinkBlack href="/">Regresar al inicio</LinkBlack>
      </div>
    </div>
  );
}
