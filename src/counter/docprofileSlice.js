import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const docProfileSlice = createApi({
    reducerPath: 'api',
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3000/"
    }),
    endpoints : (builder)=>({
        hedardata : builder.query({
            query : ()=> "hederdata"
        }),
        navroute : builder.query({
            query : ()=> "navdata"
        }),
        errorpage : builder.query({
            query : ()=> "errordata"
        }),
        homebaner : builder.query({
            query : ()=> "homebanardata"
        }),
        homewcdata : builder.query({
            query : ()=> "homewellcomedata"
        })
    })
})

export const {useErrorpageQuery,useHomebanerQuery,useHedardataQuery,useNavrouteQuery,useHomewcdataQuery} = docProfileSlice