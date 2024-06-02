import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const docProfileSlice = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/"
    }),
    endpoints : (builder)=>({
        errorpage : builder.query({
            query : ()=> "errordata"
        }),
        homebaner : builder.query({
            query : ()=> "homebanardata"
        })
    })
})

export const {useErrorpageQuery,useHomebanerQuery} = docProfileSlice