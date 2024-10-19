import React from 'react';
import s from './checkbox.module.scss';

type Props<T extends React.ElementType = 'input'> = {
   label?: string;
   error?: boolean;
   checked?: boolean;
   onCheckedChange: (checked: boolean) => void;
} & React.ComponentPropsWithRef<T>;

export const Checkbox = (props: Props) => {
   const { label, checked, error, onCheckedChange, ...rest } = props;

   const id = React.useId();

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange(e.target.checked);
   };

   return (
      <>
         <input
            className={`${s.checkbox_custom} ${checked ? s.checkbox__checked : ''} ${error ? s.error__input : ''}`}
            checked={checked}
            {...rest}
            onChange={onChange}
            type="checkbox"
            name="checkbox"
            id={id}
         ></input>
         <label htmlFor={id}> </label>
         {label ? <span>{label}</span> : null}
      </>
   );
};
