import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/shared/ui/input';

import { Button } from '@/shared/ui/button';
import { registerSchema, RegisterSchema } from '../../model/validationSchema';

export const RegisterForm = () => {
   const {
      control,
      handleSubmit,
      register,
      formState: { errors },
   } = useForm<RegisterSchema>({
      resolver: zodResolver(registerSchema),
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
         <Input
            errorMessage={errors.password?.message}
            error={errors.password ? true : false}
            {...register('confirmPassword')}
            label={'confirmPassword'}
            type={'confirmPassword'}
         />
         <Button type="submit">Submit</Button>
      </form>
   );
};
