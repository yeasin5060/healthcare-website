import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const docProfileSlice = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/"
    }),
    endpoints : (builder)=>({
        errorpage : builder.query({
            query : ()=> "errordata"
        })
    })
})

export const {useErrorpageQuery} = docProfileSlice