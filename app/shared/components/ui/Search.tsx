import { useState } from 'react';
import Select from 'react-select';
import { useDebouncedCallback } from 'use-debounce';
import { IoSearch } from 'react-icons/io5';
import { customStylesSelect } from '@shared/constants/custom-styles-select';
import { twMerge } from 'tailwind-merge';

interface Option {
  value: string;
  label: string;
}

interface SearchProps {
  options?: Option[];
  optionDisabled?: boolean;
  value?: string;
  valueCategory?: string | undefined;
  placeholderSelect?: string;
  placeholderSearch?: string;
  classContainer?: string;
  classSelect?: string;
  onChange: (value: { search: string; category?: string | undefined }) => void;
}

export default function Search({ options = [], optionDisabled, value = '', placeholderSearch = '', placeholderSelect = '', classContainer, classSelect, valueCategory = undefined, onChange }: SearchProps) {
  const [search, setSearch] = useState(value);
  const [category, setCategory] = useState<string | undefined>(valueCategory);

  // Debounce callback
  const debounced = useDebouncedCallback((value) => {
    onChange({ search: value, category });
  }, 1000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setSearch(value);

    if (search.trim().length > 0) debounced(value);
  };

  const handleCategory = (data: unknown) => {
    const category = data as Option | undefined;
    setCategory(category?.value);
    if (value && search) onChange({ search, category: category?.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      onChange({ search, category });
    }
  };

  return (
    <>
      <form className={twMerge('flex items-center gap-2 relative w-full max-w-[400px] h-fit z-40', classContainer)} onSubmit={handleSubmit} onReset={() => setSearch('')}>
        <button type="submit" className="absolute to-50% left-1 text-gray-400 hover:bg-opacity-70 transition-all w-10 h-10 flex items-center justify-center rounded-full focus-visible:outline-none" aria-label={placeholderSearch}>
          <IoSearch className="text-[18px]" />
        </button>
        <input type="text" placeholder={placeholderSearch} value={search} onChange={handleSearch} className="w-full pl-10 pr-[200px] py-3 font-normal text-gray-500 placeholder:text-gray-400 border border-gray-200 rounded-full focus-visible:outline-none focus-visible:border-gray-300 transition-colors" />

        <div className="absolute to-50% right-2">
          <Select placeholder={placeholderSelect} isSearchable={false} options={options} value={options.find((option) => option.value === category)} onChange={handleCategory} className={twMerge('min-w-[200px] z-20 text-nowrap rounded-full select-none', classSelect)} styles={customStylesSelect} isDisabled={optionDisabled} />
        </div>
      </form>
    </>
  );
}
