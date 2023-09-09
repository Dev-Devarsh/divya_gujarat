import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://newsapi.org/',
    timeout: 10000
  }),
  tagTypes: ['newsAPI'],
  endpoints: (builder) => ({
    newsData: builder.query({
      query: (arg:any) => ({    
        url: "/v2/everything?q=tesla&apiKey=bdd208e2d66040ea8cb4be83ccbc90d7",
        method: "GET",
      }),
    }),
  }),
});
  
export const { useNewsDataQuery } = newsApi;
