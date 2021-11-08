import React from 'react'
import useDarkMode from '../context/useDark'

const MainLayout = ({children}) => {

    const {dark,setDark} = useDarkMode()

    return (
        <div>
            Header
            {children}
        </div>
    )
}

export default MainLayout
