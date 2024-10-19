import { useController, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const LoginForm = () => {
   const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(3),
      rememberMe: z.boolean().default(false),
   });
   type FormValues = z.infer<typeof loginSchema>;
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
   const {
      field: { value, onChange },
   } = useController({
      name: 'rememberMe',
      control,
      defaultValue: false,
   });

   return (
      <form onSubmit={onSubmit}>
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
         <Checkbox onCheckedChange={onChange} checked={value} label={'remember me'} />
         <Button type="submit">Submit</Button>
      </form>
   );
};
