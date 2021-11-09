import React from 'react'
import CountriesList from '../components/CountriesList'
import useDarkMode from '../context/useDark'

const Index = () => {

    const {dark} = useDarkMode()

    return (
        <div>
            <CountriesList/>
        </div>
    )
}

export default Index
