import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import CountryItem from './CountryItem';
import { nanoid } from 'nanoid';

const CountriesList = () => {

    // const {data,loading,error} = useFetch('https://restcountries.com/v3.1/all');
    const {data,loading,error} = useFetch('https://restcountries.com/v3.1/region/america');
    // const {data,loading,error} = useFetch('https://restcountries.com/v3.1/name/colombia');
    
    useEffect(()=>{
        console.log('data: ',data,loading,error);
        loading||console.log(data);
    },[data,loading,error])


    return (
        <>
            {
                loading?
                ("Cargando..."):
                (<List data={data}/>)
            }
        </>
    )
}

const List = ({data}) => {

    return(
        <ul className="grid grid-cols-1 gap-y-12 lg:grid-cols-4">
            {
                data.map((e,i)=> (
                    <li key={nanoid()}>
                        <CountryItem {...e}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default CountriesList
