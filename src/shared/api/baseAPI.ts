import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
   baseUrl: import.meta.env.BASE_URL,
});

export const baseAPI = createApi({
   baseQuery,
   endpoints: () => ({}),
   reducerPath: 'baseAPI',
   tagTypes: [],
});
