import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean;
}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  active?: boolean;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  active?: boolean;
}
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {}

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Input({ className, placeholder, active = false, ...props }: InputProps) {
  return (
    <div className="form-text-focus relative w-full select-none">
      <input {...props} className={twMerge('select-none w-full pt-6 pb-1 px-4 border border-gray-200 rounded text-sm', className)} />
      <label className={twMerge('absolute left-4 top-[50%] leading-none select-none pointer-events-none transform text-gray-400 -translate-y-[50%] block text-sm transition-all duration-200', (props.value || active) && 'active')} htmlFor={props.id || props.name}>
        {props.title || placeholder}
      </label>
    </div>
  );
}

export function Checkbox({ className, type, ...props }: InputProps) {
  return <input type="checkbox" {...props} className={twMerge('select-none border border-gray-200 rounded text-sm w-4 h-4', className)} />;
}

export function Label({ className, ...props }: LabelProps) {
  return <label {...props} className={twMerge('text-sm select-none', className)} />;
}

export function Textarea({ className, active = false, ...props }: TextareaProps) {
  return (
    <div className="form-text-focus relative w-full select-none">
      <textarea {...props} className={twMerge('select-none w-full pt-6 pb-1 px-4 border border-gray-200 rounded text-sm', className)} />
      <label className={twMerge('absolute left-4 top-[50%] leading-none select-none pointer-events-none transform text-gray-400 -translate-y-[50%] block text-sm transition-all duration-200', (props.value || active) && 'active')} htmlFor={props.id || props.name}>
        {props.title}
      </label>
    </div>
  );
}

export function Select({ className, active = false, ...props }: SelectProps) {
  return (
    <div className="form-text-focus relative w-full select-none">
      <select {...props} className={twMerge('select-none w-full pt-6 pb-1 px-4 border border-gray-200 rounded text-sm', className)}>
        {props.children}
      </select>
      <label className={twMerge('absolute left-4 top-[50%] leading-none select-none pointer-events-none transform text-gray-400 -translate-y-[50%] block text-sm transition-all duration-200', (props.value || active) && 'active')} htmlFor={props.id || props.name}>
        {props.title}
      </label>
    </div>
  );
}

export function Radio({ className, type, ...props }: RadioProps) {
  return <input {...props} type="radio" className={twMerge('select-none border border-gray-200 rounded text-sm w-4 h-4', className)} />;
}
