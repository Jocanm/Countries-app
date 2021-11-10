import React, { useState } from 'react'
import CountriesList from '../components/CountriesList'
import { UseRegion } from '../context/useBusquedaRegion'

const Index = () => {

    const [region,setRegion] = useState("")

    return (
        <div>
            <UseRegion.Provider value={{region,setRegion}}>
                <CountriesList />
            </UseRegion.Provider>
        </div>
    )
}

export default Index
