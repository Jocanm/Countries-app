import React, { useEffect, useRef, useState } from 'react'
import useBusquedas from '../context/useBusqueda'
import useRegion from '../context/useBusquedaRegion';
import useDarkMode from '../context/useDark'

const CountryInput = () => {

    const { setBusqueda } = useBusquedas();
    const form = useRef(null)
    const { dark } = useDarkMode()
    const {region,setRegion} = useRegion()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e);
        const data = new FormData(form.current)
        const nuevaVenta = {}
        data.forEach((valor, llave) => {
            nuevaVenta[llave] = valor
        })

        const { country } = nuevaVenta;
        setBusqueda(country)
        setRegion("")
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                ref={form}
                className={`flex w-11/12 mx-auto mb-9 shadow-xl rounded-lg ${dark ? "bg-ca-dark" : "bg-ca-white"} transition1`}>
                <i
                    className={`fas fa-search icono ${!dark ? "text-ca-neutro" : "text-ca-light"} cursor-pointer`}
                    onClick={handleSubmit}
                ></i>
                <label className="w-full" htmlFor="country">
                    <input
                        type="text"
                        className={`px-4 pl-12 w-full py-4 outline-none rounded-lg ${dark && "bg-ca-dark text-ca-light"} transition1`}
                        placeholder="Search for a country..."
                        name="country"
                    />
                </label>
            </form>
            <select 
            defaultValue={0}
            className={`
            ml-6 w-2/5 py-3 outline-none rounded-lg mb-10 shadow-xl px-4 
            ${dark?"bg-ca-dark text-ca-light":"bg-ca-white text-ca-darkest"} 
            transition1`}
            value={region}
            onChange={(e)=>setRegion(e.target.value)}
            >
                <option disabled value={0}>Filter by Region</option>
                <option>All</option>
                <option>Africa</option>
                <option>Asia</option>
                <option value="Americas">America</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
        </>
    )
}

export default CountryInput
