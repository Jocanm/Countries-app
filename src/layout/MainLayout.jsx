import React from 'react'
import useDarkMode from '../context/useDark'

const MainLayout = ({ children }) => {

    const { dark, setDark } = useDarkMode()

    return (
        <div className="w-screen h-screen grid-container overflow-x-hidden">
            <header className={`flex items-center justify-between h-16 py-14 px-2 pq:px-5 md:py-14 md:pl-16 header
            ${dark ? "bg-ca-dark text-ca-white" : "bg-ca-white text-ca-darkest"} transition1`}>
                <span className="font-semibold text-lg pq:text-xl sm:text-3xl md:font-extrabold tracking-wide md:ml-10">Where in the world</span>
                <p
                    className="cursor-pointer mr-12"
                    onClick={() => setDark(!dark)}
                >
                    <i className={`${dark ? "fas fa-moon" : "far fa-moon"}`}></i>
                    <span className="ml-3 font-semibold tracking-wide">Dark mode</span>
                </p>
            </header>
            <main className={`main ${dark ? "bg-ca-verydark main-dark" : "bg-ca-light main-light"} transition1 main-shadow pt-20`}>
                <section>
                    {children}
                </section>
            </main>
        </div>
    )
}

export default MainLayout
