import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/*
fetch('http://localhost:3001/post',{
    method: 'GET', 
    credentials: 'include',
    mode: "cors",
    cache: "default",
})
.then((response) => response.json())
.then((response)=> console.log(response)
.catch((err)=> console.log(err))
)
*/
export const ApiToRecupere = createApi({
    reducerPath: 'ApiToRecupere',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/post', // Corrigez l'URL pour pointer vers le serveur
    }),
    
    //nous allons utiliser ces endpoints pour definir toutes
    //les action qu'on vas utiliser sur mon api
    endpoints: (builder)=>({
        getTopCharts: builder.query({query:()=> '/charts/world'}), //important la fonction fleche
        getArtist: builder.query({query:(artistId)=> `/artist/${artistId}`})
    })

})

export const {
    useGetTopChartsQuery,
    useGetArtistQuery
}= ApiToRecupere