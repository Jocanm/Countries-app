import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import CountryItem from './CountryItem';
import { nanoid } from 'nanoid';

const CountriesList = () => {

    // const {data,loading,error} = useFetch('https://restcountries.com/v3.1/all');
    // const {data,loading,error} = useFetch('https://restcountries.com/v3.1/region/america');
    const {data,loading,error} = useFetch('https://restcountries.com/v3.1/name/colombia');
    
    useEffect(()=>{
        console.log('data: ',data,loading,error);
        loading||console.log(data[0]);
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
        <ul>
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
