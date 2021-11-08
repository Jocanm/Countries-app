import React from 'react'
import useFetch from '../hooks/useFetch';

const CountryItem = ({name}) => {

    const {common} = name;

    return (
        <div>
            {common}
        </div>
    )
}

export default CountryItem
