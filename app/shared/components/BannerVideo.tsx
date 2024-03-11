import { LinkBlack, LinkWhite } from '@shared/components/ui/Links';

interface Link {
  color: 'white' | 'black';
  name: string;
  url: string;
  id: string | number;
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
            {links.map(({ color, id, name, url }) => {
              if (color === 'white') {
                return (
                  <LinkWhite key={id} className="border-white px-10" href={url}>
                    {name}
                  </LinkWhite>
                );
              }

              return (
                <LinkBlack key={id} className={'px-10'} href={url}>
                  {name}
                </LinkBlack>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
