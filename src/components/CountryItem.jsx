import React, { useEffect, useState } from 'react'
import useDarkMode from '../context/useDark';

const CountryItem = ({ name, population, region, capital, flags }) => {

    const [cap,setCap] = useState("")
    const { dark } = useDarkMode()
    const { common } = name;
    const { svg, png } = flags;

    useEffect(()=>{

        capital&&setCap(capital)

    },[capital])

    const [styles,setStyles] = useState("bg-ca-light")

    useEffect(()=>{
        dark?setStyles("bg-ca-dark"):setStyles("bg-ca-light")
    },[dark])

    return (
        <div className={`card mx-auto rounded-lg lg:h-auto shadow-xl transition1 ${styles}`}>
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
            <article className={`py-8 px-6`}>
                <h1 className={`text-xl md:text-sm font-semibold mb-4 ${dark?"text-ca-white":"text-ca-verydark font-extrabold"}`}>{common}</h1>
                <ul>
                    <li className={`${dark?"text-ca-light opacity-95":"text-ca-verydark font-semibold"} opacity-95`}>
                        Population:
                        <span className={`${dark?"text-ca-light opacity-70":"text-ca-verydark font-normal"} ml-1`}>{population}</span>
                    </li>
                    <li className={`${dark?"text-ca-light opacity-95":"text-ca-verydark font-semibold"} opacity-95`}>
                        Region:
                        <span className={`${dark?"text-ca-light opacity-70":"text-ca-verydark font-normal"} ml-1`}>{region}</span>
                    </li> 
                    <li className={`${dark?"text-ca-light opacity-95":"text-ca-verydark font-semibold"} opacity-95`}>
                        Capital:
                        <span className={`${dark?"text-ca-light opacity-70":"text-ca-verydark font-normal"} ml-1`}>{cap}</span>
                    </li>
                </ul>
            </article>
        </div>
    )
}

export default CountryItem
