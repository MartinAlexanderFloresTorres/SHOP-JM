import { CollectionProduct } from '@/app/collections/interfaces';
import CollectionProducts from './CollectionProducts';

interface CategoriesProps {
  categories: CollectionProduct[];
}

export default function CollectionsOfProducts({ categories }: CategoriesProps) {
  return (
    <div className="container flex flex-col gap-6 p-4 md:p-6">
      {categories.map((category) => (
        <CollectionProducts key={category.id} category={category} />
      ))}
    </div>
  );
}
