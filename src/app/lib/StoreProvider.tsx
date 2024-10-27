import { type ReactNode, useEffect, useRef } from 'react';
import { Provider } from 'react-redux';

import { setupListeners } from '@reduxjs/toolkit/query';

import { AppStore, makeStore } from './store';
import { Nullable } from '@/shared/types/common';

type Props = {
   readonly children: ReactNode;
};

export const StoreProvider = ({ children }: Props) => {
   const storeRef = useRef<Nullable<AppStore>>(null);

   if (!storeRef.current) {
      storeRef.current = makeStore();
   }

   useEffect(() => {
      if (storeRef.current != null) {
         const unsubscribe = setupListeners(storeRef.current.dispatch);

         return unsubscribe;
      }
   }, []);

   return <Provider store={storeRef.current}>{children}</Provider>;
};
