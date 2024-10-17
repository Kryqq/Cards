import { Button } from '@/components/ui/button';
import { Input } from './components/ui/input';
import './styles/_boilerplate.scss';
import { Tab } from './components/ui/tabs';
import { LoginForm } from './components/auth/loginForm/loginForm';

export function App() {
   return (
      <div>
         {/* <Button>JASDASDASD</Button>
         <Input placeholder="inp" label="input"></Input>
         <Input placeholder="JASDASDASD" label="JASDASDASD" error={true}></Input>
         <Input placeholder="disabled" label="input" disabled></Input>
         <Tab></Tab> */}
         <LoginForm></LoginForm>
      </div>
   );
}
