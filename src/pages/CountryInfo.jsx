import { nanoid } from 'nanoid'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import useDarkMode from '../context/useDark'
import { useData } from '../context/useMainData'

const CountryInfo = ({ history }) => {

    const { dark } = useDarkMode()
    const { mainData } = useData()

    const { countryName } = useParams()

    const DATA = mainData.find(e => e.name.common.toLowerCase() === countryName.toLowerCase())

    const handleBack = () => {
        // history.goBack()
    }


    // return loading ? <h1>Cargando...</h1> : <Country data={DATA} handleBack={handleBack} dark={dark} />
    return <Country data={DATA} handleBack={handleBack} dark={dark} />
}

const Country = ({ data, handleBack, dark }) => {

    const [cap, setCapital] = useState("")
    const [domain, setDomain] = useState("")
    const { svg, png } = data.flags
    const { common } = data.name

    //Getting the first native name
    const { nativeName } = data.name
    const [firstNativeName] = Object.keys(nativeName)
    const comun = nativeName[firstNativeName].common

    //Getting the currency name
    const [firstCurrency] = Object.keys(data.currencies)
    const currencyName = data.currencies[firstCurrency].name

    const languages = Object.values(data.languages)
    useEffect(() => {

        data.capital && setCapital(data.capital)
        data.tld && setDomain(data.tld)

    }, [data.capital, data.tld])

    return (
        <div className="py-1 px-8 lg:px-16">
            <Link to="/">
                <button
                    onClick={handleBack}
                    className={`pr-6 pl-6 py-2 rounded-sm shadow-xl ${dark ? "bg-ca-dark text-ca-light" : "bg-ca-white text-ca-verydark"} transition1`}
                >
                    <i className="fas fa-angle-left mr-2"></i>
                    <span>Back</span>
                </button>
            </Link>
            <article className="mt-10 transition1 lg:flex">
                <img
                    src={svg}
                    alt={common}
                    className="lg:h-96 lg:mr-36"
                />
                {/* <img
                    src={png}
                    alt={common}
                    className="hidden lg:block"
                /> */}
                <div>
                    <h2 className={`mt-10 lg:mt-7 font-semibold text-3xl ${dark ? "text-ca-light" : "text-ca-darkest"}`}>{common}</h2>
                    <div className="lg:flex items-baseline mt-6 lg:mt-4">
                        <ul className="lg:mr-20">
                            <SpecificInfo title="Native name" info={comun} />
                            <SpecificInfo title="Population" info={data.population} />
                            <SpecificInfo title="Region" info={data.region} />
                            <SpecificInfo title="Sub Region" info={data.subregion} />
                            <SpecificInfo title="Capital" info={cap} />
                        </ul>
                        <ul className="mt-12 lg:mt-0">
                            <SpecificInfo title={"Top Level Domain"} info={domain} />
                            <SpecificInfo title={"Currency"} info={currencyName} />
                            <SpecificInfo title={"Languages"} info={languages.join(", ")} />
                        </ul>
                    </div>
                    <ul className="mt-12 lg:flex items-center">
                        <h2 className={`text-lg ${dark ? "text-ca-light opacity-95" : "text-ca-verydark font-semibold"} opacity-95`}>Border countries:</h2>

                        <div className={`grid grid-cols-3 gap-3 lg:ml-4 ${data.borders.length>6&&"grid-cols-4"}`}>
                            {
                                data.borders.map(e => <ButtonBorder alpha={e} key={nanoid()} />)
                            }
                        </div>
                    </ul>
                </div>
            </article>
        </div>
    )

}

const ButtonBorder = ({ alpha }) => {

    const history = useHistory()

    const { dark } = useDarkMode()

    const { mainData } = useData()
    const myCountry = mainData.find(e => e.cca3 === alpha)
    const { common } = myCountry.name

    return (
        <button
            className={`shadow-lg text-sm px-3 py-2 rounded-sm ${dark ? "bg-ca-dark text-ca-light" : "bg-ca-white text-ca-verydark"} transition1`}
            onClick={() => { history.push(`/country/${common}`) }}
        >
            {common}
        </button>
    )
}

const SpecificInfo = ({ title, info }) => {

    const { dark } = useDarkMode()

    return (
        <li className="mt-2">
            <span className={`${dark ? "text-ca-light opacity-95" : "text-ca-verydark font-semibold"} opacity-95`}>{title}: </span>
            <span className={`${dark ? "text-ca-light opacity-70" : "text-ca-verydark font-normal"} ml-1`}>{info}</span>
        </li>
    )
}

export default CountryInfo
