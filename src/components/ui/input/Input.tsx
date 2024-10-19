import React, { forwardRef } from 'react';
import s from './input.module.scss';
export type Props<T extends React.ElementType = 'input'> = {
   variant?: 'default' | 'password' | 'search';
   className?: string;
   label?: string;
   error?: boolean;
} & React.ComponentPropsWithoutRef<T>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
   const { variant = 'default', label, error, className, ...rest } = props;

   return (
      <div className={s.input__box}>
         {label ? <label className={s.input__label}>{label}</label> : null}
         <input
            ref={ref}
            className={` ${s.input} ${s[variant]} ${className} ${error ? s.error__input : ''} `}
            {...rest}
         />
         {error ? <div className={s.error}>Error</div> : null}
      </div>
   );
});
