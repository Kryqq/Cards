import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/shared/ui/input';
import { ControlledCheckbox } from '@/shared/ui/controlled-checkbox';
import { Button } from '@/shared/ui/button';
import { FormValues, loginSchema } from '../model/validationSchema';

export const LoginForm = () => {
   const {
      control,
      handleSubmit,
      register,
      formState: { errors },
   } = useForm<FormValues>({
      resolver: zodResolver(loginSchema),
   });

   const onSubmit = handleSubmit((data) => {
      console.log(data);
   });

   return (
      <form onSubmit={onSubmit}>
         <DevTool control={control} />
         <Input
            errorMessage={errors.email?.message}
            error={errors.email ? true : false}
            {...register('email')}
            label={'Email'}
         />
         <Input
            errorMessage={errors.password?.message}
            error={errors.password ? true : false}
            {...register('password')}
            label={'Password'}
            type={'password'}
         />
         <ControlledCheckbox label={'Remember me'} control={control} name={'rememberMe'} />
         <Button type="submit">Submit</Button>
      </form>
   );
};