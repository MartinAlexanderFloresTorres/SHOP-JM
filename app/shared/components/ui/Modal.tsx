import { useEffect } from 'react';
import { IconType } from 'react-icons';
import { twMerge } from 'tailwind-merge';

export interface ModaProps {
  IconClose?: IconType;
  onClose: () => void;
  allowCloseOnTouch?: boolean;
  showHeader?: boolean;
  childrenHeader?: React.ReactNode;
  title?: string;
  description?: string;
  childrenFooter?: React.ReactNode;
  classNameFooter?: string;
  children: React.ReactNode;
  classNameModal?: string;
  classNameContainer?: string;
  classNameContent?: string;
  classNameHeader?: string;
  classNameDescription?: string;
  classNameTitle?: string;
  center?: boolean;
}

export default function Modal({ IconClose, onClose, allowCloseOnTouch = false, center = false, showHeader = false, title, description, childrenHeader, childrenFooter, classNameContainer, classNameModal, classNameHeader, classNameTitle, classNameDescription, classNameContent, classNameFooter, children }: ModaProps) {
  useEffect(() => {
    // Evitar el scroll del body
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const paddingRight = window.innerWidth - document.body.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${paddingRight}px`;

    // Evento de ESC
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    // Limpiar
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <section
      className={twMerge('fixed p-0 lg:p-4 bg-white lg:bg-black lg:bg-opacity-70 inset-0 z-[999] w-full h-vh transition-all animate-fade-in', center && 'flex flex-col justify-center items-center', classNameModal)}
      onClick={({ currentTarget, target }) => {
        if (allowCloseOnTouch && currentTarget === target) onClose();
      }}
    >
      <div className={twMerge('bg-white lg:max-w-[700px] lg:mx-auto flex flex-col w-full overflow-auto animate-fade-in-scale', center ? 'h-fit' : 'h-full', classNameContainer)}>
        {showHeader && !childrenHeader ? (
          <div className={twMerge('custom-grid-3 items-center gap-4 sticky bg-white border-b border-b-gray-200 top-0 z-10 p-4', classNameHeader)}>
            <span></span>
            <div>
              {title && <h2 className={twMerge('font-black uppercase text-[18px] text-center', classNameTitle)}>{title}</h2>}
              {description && <p className={twMerge('text-gray-400 font-normal text-[14px] text-center mt-1', classNameDescription)}>{description}</p>}
            </div>
            {IconClose && (
              <button type="button" className="ml-auto w-[48px] h-[48px] flex items-center justify-center bg-black text-white border-2 border-white rounded-full focus-visible:outline-none focus-visible:outline-offset-1 focus-visible:outline-red-400 transition-all hover:bg-opacity-70" onClick={onClose} aria-label="Cerrar Filtros">
                <IconClose className="text-xl" />
              </button>
            )}
          </div>
        ) : (
          childrenHeader && <div className={twMerge('p-4 bg-white border-b border-b-gray-200', classNameHeader)}>{childrenHeader}</div>
        )}
        <div className={twMerge('flex flex-col gap-4 p-6 overflow-auto flex-1', classNameContent)}>{children}</div>
        {childrenFooter && <div className={twMerge('p-4 bg-white border-t border-t-gray-200 ', classNameFooter)}>{childrenFooter}</div>}
      </div>
    </section>
  );
}
