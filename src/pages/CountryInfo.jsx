import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const CountryInfo = ({ history }) => {

    const { countryName } = useParams()
    const { data, loading } = useFetch(`https://restcountries.com/v3.1/name/${countryName}`)
    

    const handleBack = () => {
        // history.goBack()
        console.log(data[0]);
    }


    return loading?<h1>Cargando...</h1>:<Country data={data[0]} handleBack={handleBack} />
}


const Country = ({ data,handleBack }) => {

    const {svg,png} = data.flags
    const {common} = data.name
    const {nativeName} = data.name

    console.log(Object.keys(nativeName))

    return (
        <div className="py-1 px-8">
            <button
                onClick={handleBack}
                className={`pr-4 pl-4 py-2 rounded-sm shadow-xl bg-ca-dark text-ca-white text-sm`}
            >
                <i class="fas fa-angle-left mr-2"></i>
                <span>Back</span>
            </button>
            <article className="mt-10">
                <img src={svg} alt="" />
            </article>
        </div>
    )

}

export default CountryInfo
