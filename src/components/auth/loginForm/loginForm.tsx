import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type FormValues = {
   email: string;
   password: string;
};

export const LoginForm = () => {
   const { register, handleSubmit } = useForm<FormValues>();

   const onSubmit = handleSubmit((data) => {
      console.log(data);
   });

   return (
      <form onSubmit={onSubmit}>
         <Input {...register('email')} label={'Email'} />
         <Input {...register('password')} label={'Password'} type={'password'} />
         <Button type="submit">Submit</Button>
      </form>
   );
};
