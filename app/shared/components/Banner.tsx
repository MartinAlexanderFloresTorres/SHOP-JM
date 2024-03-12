import Image from 'next/image';
import { LinkBlack, LinkWhite } from '@shared/components/ui/Links';
import { twMerge } from 'tailwind-merge';

interface Link {
  color: 'white' | 'black';
  name: string;
  url: string;
  id: string | number;
}

interface BannerProps {
  title: string;
  description?: string;
  image: string;
  links?: Link[];
  children?: React.ReactNode;
  className?: string;
  classContainer?: string;
  classOverlay?: string;
  classTitle?: string;
  classDescription?: string;
  clasImage?: string;
  classLinks?: string;
  classLink?: string;
}

export default function Banner({ title, description, image, links = [], className, classOverlay, classContainer, clasImage, classTitle, classDescription, classLinks, classLink, children }: BannerProps) {
  return (
    <div className={twMerge('relative w-full h-[400px] md:h-[500px]', className)}>
      <Image className={twMerge('absolute inset-0 -z-10 object-cover select-none pointer-events-none w-full h-full', clasImage)} width="1300" height="500" priority src={image} alt={title} />
      <div className={twMerge('banner container h-full flex justify-end flex-col p-4 md:p-6 text-white', classOverlay)}>
        <div className={twMerge('max-w-[780px]', classContainer)}>
          <h2 className={twMerge('text-3xl md:text-5xl font-extrabold uppercase line-clamp-3', classTitle)}>{title}</h2>
          {description && <p className={twMerge('text-lg my-4 line-clamp-5', classDescription)}>{description}</p>}

          {children && children}
          <div className={twMerge('flex items-center flex-wrap gap-4', classLinks)}>
            {links.map(({ color, id, name, url }) => {
              if (color === 'white') {
                return (
                  <LinkWhite key={id} className={twMerge('border-white px-10', classLink)} href={url}>
                    {name}
                  </LinkWhite>
                );
              }

              return (
                <LinkBlack key={id} className={twMerge('px-10', classLink)} href={url}>
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
