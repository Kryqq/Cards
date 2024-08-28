import React, { ComponentPropsWithoutRef } from 'react';
import s from './input.module.scss';
export type Props = {
   variant?: 'default' | 'password' | 'search';
   className?: string;
   label?: string;
   error?: boolean;
} & ComponentPropsWithoutRef<'input'>;

export const Input = (props: Props) => {
   const { variant = 'default', value, placeholder, disabled, type, label, error, className, ...rest } = props;
   return (
      <div className={s.input__box}>
         {label && !error ? <label className={`${s.input__label} ${disabled ? s.disabled : ''}`}>{label}</label> : null}
         <input
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            className={` ${s.input} ${s[variant]} ${className} ${error ? s.error__input : ''} ${disabled ? s.disabled : ''} `}
            {...rest}
            value={value}
         ></input>
         {error ? <div className={s.error}>Error</div> : null}
      </div>
   );
};
