import React from 'react'
import useDarkMode from '../context/useDark'

const MainLayout = ({ children }) => {

    const { dark, setDark } = useDarkMode()

    return (
        <div className="w-screen h-screen">
            <header className={`flex items-center justify-between h-16 py-14 px-5 md:py-14 md:px-16
            ${dark?"bg-ca-dark text-ca-white":"bg-ca-white text-ca-darkest"} transition1
            `}>
                <span className="font-semibold text-3xl md:font-extrabold tracking-wide">Where in the world</span>
                <p 
                className="cursor-pointer"
                onClick={()=>setDark(!dark)}
                >
                    <i className={`${dark?"fas fa-moon":"far fa-moon"}`}></i>
                    <span className="ml-3 font-semibold tracking-wide">Dark mode</span>
                </p>
            </header>
            <main className={`h-screen ${dark?"bg-ca-verydark main-dark":"bg-ca-light main-light"} transition1 main-shadow`}>{children}
            </main>
        </div>
    )
}

export default MainLayout
