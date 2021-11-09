import React, { useRef } from 'react'
import useBusquedas from '../context/useBusqueda'
import useDarkMode from '../context/useDark'

const CountryInput = () => {

    const {setBusqueda} = useBusquedas();
    const form = useRef(null)
    const { dark } = useDarkMode()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e);
        const data = new FormData(form.current)
        const nuevaVenta = {}
        data.forEach((valor,llave)=>{
            nuevaVenta[llave]=valor
        })

        const {country} = nuevaVenta;
        setBusqueda(country)
    }

    return (
        <form
            onSubmit={handleSubmit}
            ref={form}
            className={`flex w-11/12 mx-auto mb-9 shadow-xl rounded-lg ${dark ? "bg-ca-dark" : "bg-ca-white"} transition1`}>
            <i className={`fas fa-search icono ${!dark ? "text-ca-neutro" : "text-ca-light"} cursor-pointer`}></i>
            <label className="w-full" htmlFor="country">
                <input
                    type="text"
                    className={`px-4 pl-12 w-full py-4 outline-none rounded-lg ${dark && "bg-ca-dark text-ca-light"} transition1`}
                    placeholder="Search for a country..."
                    name="country"
                // value={busqueda}
                // onChange={(e)=>setBusqueda(e.target.value)}
                />
            </label>
        </form>
    )
}

export default CountryInput
