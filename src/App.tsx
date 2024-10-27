import { StoreProvider } from './app/lib/StoreProvider';
import { Router } from './app/providers/router';

export function App() {
   return (
      <StoreProvider>
         <Router />
      </StoreProvider>
   );
}
