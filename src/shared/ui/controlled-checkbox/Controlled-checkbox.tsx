import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { Checkbox, СheckboxProps } from '../checkbox/Checkbox';

export type ControlledCheckboxProps<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> &
   Omit<СheckboxProps, 'onChange' | 'value' | 'id'>;

export const ControlledCheckbox = <TFieldValues extends FieldValues>({
   name,
   rules,
   shouldUnregister,
   control,
   defaultValue,
   ...checkboxProps
}: ControlledCheckboxProps<TFieldValues>) => {
   const {
      field: { onChange, value },
   } = useController({
      name,
      rules,
      shouldUnregister,
      control,
      defaultValue,
   });

   return <Checkbox onChange={onChange} checked={value} id={name} {...checkboxProps} />;
};
