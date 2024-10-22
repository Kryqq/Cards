import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControlledCheckbox } from '@/components/ui/controlled-checkbox';

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
