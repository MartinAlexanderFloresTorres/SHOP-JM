import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button className={twMerge('block py-2 px-6 text-[14px] transition-all duration-300 font-bold uppercase', className)} {...props}>
      {children}
    </button>
  );
}

const ButtonBlack = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-black text-center text-white border border-black hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </Button>
  );
};

const ButtonWhite = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-white text-black border hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </Button>
  );
};

const ButtonRed = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-[#E12326] text-white border border-[#E12326] hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </Button>
  );
};

const ButtonWhiteOutline = ({ className, children, ...props }: ButtonProps) => {
  return (
    <Button className={twMerge('bg-black text-white border border-white hover:bg-white hover:bg-opacity-20 active:scale-105 px-8', className)} {...props}>
      {children}
    </Button>
  );
};

export { ButtonBlack, ButtonWhite, ButtonRed, ButtonWhiteOutline };
