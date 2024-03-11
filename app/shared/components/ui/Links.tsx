import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function LinkUI({ className, children, href = '#', ...props }: LinkProps) {
  return (
    <Link href={href} {...props} className={twMerge('block py-2 px-2 text-[14px] transition-all duration-300 font-bold uppercase', className)}>
      {children}
    </Link>
  );
}

const LinkBlack = ({ className, children, ...props }: LinkProps) => {
  return (
    <LinkUI className={twMerge('bg-black text-center text-white border border-black hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </LinkUI>
  );
};

const LinkWhite = ({ className, children, ...props }: LinkProps) => {
  return (
    <LinkUI className={twMerge('bg-white text-black border hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </LinkUI>
  );
};

const LinkRed = ({ className, children, ...props }: LinkProps) => {
  return (
    <LinkUI className={twMerge('bg-[#E12326] text-white border border-[#E12326] hover:bg-opacity-80 active:scale-105', className)} {...props}>
      {children}
    </LinkUI>
  );
};

const LinkWhiteOutline = ({ className, children, ...props }: LinkProps) => {
  return (
    <LinkUI className={twMerge('bg-black text-white border border-white hover:bg-white hover:bg-opacity-20 active:scale-105 px-8', className)} {...props}>
      {children}
    </LinkUI>
  );
};

export { LinkBlack, LinkWhite, LinkRed, LinkWhiteOutline };
