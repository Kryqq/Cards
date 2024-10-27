import { baseAPI } from '@/shared/api/baseAPI';
import { type Action, type ThunkAction, combineSlices, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineSlices(baseAPI);

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
   return configureStore({
      middleware: (getDefaultMiddleware) => {
         return getDefaultMiddleware().concat(baseAPI.middleware);
      },

      reducer: rootReducer,
   });
};

export type AppStore = ReturnType<typeof makeStore>;

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<ThunkReturnType, RootState, unknown, Action>;
