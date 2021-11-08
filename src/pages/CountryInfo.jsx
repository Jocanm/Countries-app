import React from 'react'
import { useParams } from 'react-router'

const CountryInfo = () => {

    const {countryName} = useParams()

    return (
        <div>
            Informacion del pais {countryName}
        </div>
    )
}

export default CountryInfo
