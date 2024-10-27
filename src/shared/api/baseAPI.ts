import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DecksListResponse } from './types/requests/decksType';

const baseQuery = fetchBaseQuery({
   baseUrl: import.meta.env.VITE_API_URL,
   credentials: 'include',
   prepareHeaders: (headers) => {
      headers.append('x-auth-skip', 'true');
   },
});

export const baseAPI = createApi({
   reducerPath: 'baseAPI',
   baseQuery,
   tagTypes: [],
   endpoints: (builder) => ({ getDecks: builder.query<DecksListResponse, void>({ query: () => 'v2/decks' }) }),
});
export const { useGetDecksQuery } = baseAPI;
