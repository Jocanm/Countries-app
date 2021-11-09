import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';
import CountryItem from './CountryItem';
import { nanoid } from 'nanoid';
import CountryInput from './CountryInput';
import useBusquedas from '../context/useBusqueda';
import ReactLoading from 'react-loading';
import useDarkMode from '../context/useDark';

const CountriesList = () => {

    const { dark } = useDarkMode()
    const { data, loading } = useFetch('https://restcountries.com/v3.1/all');
    // const { data, loading, error } = useFetch('https://restcountries.com/v3.1/region/america');
    // const {data,loading,error} = useFetch('https://restcountries.com/v3.1/name/colombia');

    return (
        <div>
            <CountryInput />
            {
                loading ?
                    (<div className="w-screen h-full flex items-center justify-center mt-20">
                        <ReactLoading type={"spin"} color={`${dark ? "#fafafa" : "#111517"}`} height={160} width={160} />
                    </div>) :
                    (<List data={data} />)
            }
        </div>
    )
}

const List = React.memo(({ data }) => {

    const { busqueda } = useBusquedas()
    const [dataFilter, setDataFilter] = useState([])

    useEffect(() => {
        busqueda && setDataFilter(data.filter(e => {
            return e.name.common.toLowerCase().startsWith(busqueda.toLowerCase())
        }))
        busqueda || setDataFilter(data)
    }, [busqueda, data])

    return (
        <ul className="grid grid-cols-1 gap-y-12 lg:grid-cols-4">
            {
                dataFilter.map((e, i) => (
                    <li key={nanoid()}>
                        <CountryItem {...e} />
                    </li>
                ))
            }
        </ul>
    )
})

export default CountriesList
