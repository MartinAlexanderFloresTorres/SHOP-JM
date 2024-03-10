import { ButtonBlack, ButtonWhite } from './ui/Buttons';
interface Link {
  color: 'white' | 'black';
  name: string;
  url: string;
  id: string;
}

interface BannerProps {
  title: string;
  description: string;
  video: string;
  links?: Link[];
}
export default function BannerVideo({ title, description, video, links = [] }: BannerProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px]">
      <video className="w-full h-full absolute inset-0 -z-10 object-cover select-none pointer-events-none" width="600" height="500" src={video} autoPlay loop muted playsInline />
      <div className="banner container h-full flex justify-end flex-col p-4 md:p-6 text-white">
        <div className="max-w-[780px]">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase mb-4 line-clamp-3">{title}</h2>
          <p className="text-lg mb-4 line-clamp-5">{description}</p>
          <div className="flex items-center flex-wrap gap-4">
            {links.map((link) => {
              if (link.color === 'white') {
                return (
                  <ButtonWhite key={link.id} className="border-white px-10">
                    {link.name}
                  </ButtonWhite>
                );
              }

              return (
                <ButtonBlack key={link.id} className={'px-10'}>
                  {link.name}
                </ButtonBlack>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
