import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CovidMxData } from '../../interfaces';

export const serviceURL = 'https://covid-19-statistics.p.rapidapi.com/';

export const covidMXApi = createApi({
  reducerPath: 'covidMXApi',
  baseQuery: fetchBaseQuery({
    baseUrl: serviceURL,
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '5fa7fac211msh51fc12a9a17b7c8p115165jsn8305e411adb4'
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCovidMxData: builder.query<CovidMxData[], void>({
      query: () => `reports?iso=MEX`,
    }),
  }),
});

export const { useGetCovidMxDataQuery } = covidMXApi;
