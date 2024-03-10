import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge('block py-2 px-2 text-[14px] transition-all duration-300 font-bold uppercase', className)} {...props}>
      {children}
    </button>
  );
}

const ButtonBlack = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-black text-white border border-black hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </Button>
  );
};

const ButtonWhite = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-white text-black border border-black hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </Button>
  );
};

export { ButtonBlack, ButtonWhite };
