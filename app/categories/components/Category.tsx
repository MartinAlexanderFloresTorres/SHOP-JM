import { twMerge } from 'tailwind-merge';
import { FaArrowRightLong } from 'react-icons/fa6';
import { ButtonBlack } from '@/app/shared/components/ui/Buttons';
import { Category as CategoryType } from '../interfaces';

interface CategoryProps {
  className?: string;
  offsetPosition?: 'outside' | 'inside';
  category: CategoryType;
}

const Category = ({ className, offsetPosition = 'inside', category }: CategoryProps) => {
  return (
    <div className={twMerge('flex flex-col gap-2', className)}>
      <div className={'relative w-full h-full'}>
        <img className="absolute inset-0 -z-10 w-full h-full object-cover" src="/categoria-1.png" alt={category.name} />
        {offsetPosition === 'inside' && (
          <div className="banner w-full h-full flex items-end">
            <div className="p-4">
              <h2 className="uppercase text-white text-4xl font-extrabold mb-2 line-clamp-1">{category.name}</h2>
              <ButtonBlack className="px-6">Ver todo</ButtonBlack>
            </div>
          </div>
        )}
      </div>

      {offsetPosition === 'outside' && (
        <div className="w-full flex items-end">
          <div>
            <h2 className="text-black text-opacity-90 text-xl font-extrabold mb-1 line-clamp-1 uppercase">{category.name}</h2>
            <ButtonBlack className="group text-white px-5 flex items-center gap-4 overflow-hidden w-[150px]">
              <FaArrowRightLong className="w-[20px] min-w-[20px] transform opacity-0 group-hover:opacity-100 -ml-[30px] group-hover:-ml-[0px] transition-all duration-300" />
              <span className="text-nowrap pointer-events-none select-none text-[13px]">Ver todo</span>
              <FaArrowRightLong className="w-[20px] min-w-[20px] transform opacity-100 group-hover:opacity-0 ml-0 group-hover:ml-[30px] transition-all duration-300" />
            </ButtonBlack>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;
