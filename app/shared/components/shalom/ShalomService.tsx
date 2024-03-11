import { Service } from '@/app/shared/interfaces/service';

interface SharedProps {
  service: Service;
}

export default function ShalomService({ service }: SharedProps) {
  return (
    <a href={service.url} target="_blank" rel="noreferrer" key={service.id} className="bg-white group hover:bg-[#FF0000] hover:text-white shadow border border-gray-100 hover:border-[#FF0000] h-[360px] p-2 md:p-4 flex flex-col items-center justify-center gap-3 transition-colors duration-200">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="max-w-[170px] mx-auto grid grid-rows-3 items-center gap-3">
          <service.icon className="mx-auto text-6xl text-[#ff0000] group-hover:text-white" />
          <div>
            <h3 className="max-w-[120px] mx-auto font-medium text-xl text-center text-slate-500 group-hover:text-white">{service.titulo}</h3>
            <span className="block border border-gray-200 w-[50px] h-0 mx-auto mt-5"></span>
          </div>
          <p className="text-center text-[16px] text-[#62718d] group-hover:text-white">{service.descripcion}</p>
        </div>
      </div>
    </a>
  );
}
