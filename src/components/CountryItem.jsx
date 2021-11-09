import React, { useEffect, useState } from 'react'
import useDarkMode from '../context/useDark';
import useFetch from '../hooks/useFetch';

const CountryItem = ({ name, population, region, capital, flags }) => {

    const [cap,setCap] = useState("")
    const { dark } = useDarkMode()
    const { common } = name;
    const { svg, png } = flags;

    useEffect(()=>{

        capital&&setCap(capital)

    },[])

    return (
        <div className="card mx-auto bg-ca-dark rounded-lg lg:h-auto shadow-xl">
            <img 
            src={png} 
            alt={common} 
            className="hidden lg:block rounded-t-lg h-44 w-full"
            />
            <img 
            src={svg} 
            alt={common} 
            className="lg:hidden rounded-t-lg w-full"
            />
            <article className="py-8 px-6">
                <h1 className="text-ca-white text-xl md:text-sm font-semibold mb-4">{common}</h1>
                <ul>
                    <li className="text-ca-light opacity-95">
                        Population:
                        <span className="text-ca-light opacity-70 ml-1">{population}</span>
                    </li>
                    <li className="text-ca-light opacity-95">
                        Region:
                        <span className="text-ca-light opacity-70 ml-1">{region}</span>
                    </li> 
                    <li className="text-ca-light opacity-95">
                        Capital:
                        <span className="text-ca-light opacity-70 ml-1">{cap}</span>
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default CountryItem
