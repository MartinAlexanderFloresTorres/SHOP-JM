import { Servicio } from './ShalomServices';

interface SharedProps {
  servicio: Servicio;
}

export default function ShalomService({ servicio }: SharedProps) {
  return (
    <a href={servicio.url} target="_blank" rel="noreferrer" key={servicio.id} className="bg-white group hover:bg-[#FF0000] hover:text-white shadow border border-gray-100 hover:border-[#FF0000] h-[360px] p-4 flex flex-col items-center justify-center gap-3 transition-colors duration-200">
      <div className="min-w-[210px] mx-auto flex flex-col items-center justify-center gap-3">
        <div className="max-w-[170px] mx-auto grid grid-rows-3 items-center gap-3">
          <servicio.icon className="mx-auto text-6xl text-[#ff0000] group-hover:text-white" />
          <div>
            <h3 className="max-w-[120px] mx-auto font-medium text-xl text-center text-slate-500 group-hover:text-white">{servicio.titulo}</h3>
            <span className="block border border-gray-200 w-[50px] h-0 mx-auto mt-5"></span>
          </div>
          <p className="text-center text-[16px] text-[#62718d] group-hover:text-white">{servicio.descripcion}</p>
        </div>
      </div>
    </a>
  );
}
