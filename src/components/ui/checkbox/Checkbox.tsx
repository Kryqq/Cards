import React from 'react';
import s from './checkbox.module.scss';

type Props<T extends React.ElementType = 'input'> = {
   label?: string;
   error?: boolean;
   onChange?: () => void;
} & React.ComponentPropsWithRef<T>;

export const Checkbox = (props: Props) => {
   const { label, checked, error, ...rest } = props;

   const id = React.useId();

   return (
      <>
         <input
            className={`${s.checkbox_custom} ${checked ? s.checkbox__checked : ''} ${error ? s.error__input : ''}`}
            checked={checked}
            {...rest}
            type="checkbox"
            name="checkbox"
            id={id}
         ></input>
         <label htmlFor={id}> </label>
         {label ? <span>{label}</span> : null}
      </>
   );
};
