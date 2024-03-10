import { twMerge } from 'tailwind-merge';
import Category from './Category';
import { Category as CategoryType } from '../interfaces';
import { chunkArray } from '../../shared/helpers';

interface CategoriesProps {
  categories: CategoryType[];
}

export default function Categories({ categories }: CategoriesProps) {
  const chunkedCategories = chunkArray<CategoryType>(categories, 5);

  return (
    <div className="container flex flex-col gap-6 min-h-[300px] p-4 md:p-6">
      {chunkedCategories.map((chunk, index) => (
        <div key={index} className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {chunk.map((category, index) => (
            <Category key={category.id} className={twMerge('min-h-[260px] md:min-h-[360px]', index === 0 && 'col-start-1 col-end-3')} offsetPosition={index === 0 ? 'inside' : 'outside'} category={category} />
          ))}
        </div>
      ))}
    </div>
  );
}
