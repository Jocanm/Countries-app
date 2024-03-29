import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import CountryInfo from './pages/CountryInfo'
import Index from './pages/Index'
import { UseDark } from './context/useDark';
import { UseBusqueda } from './context/useBusqueda';
import { UseCountry } from './context/useCountry';
import { UseMainData } from './context/useMainData';

const App = () => {

    const [dark, setDark] = useState(true)
    const [busqueda, setBusqueda] = useState("")
    const [country, setCountry] = useState("")
    const [mainData, setMainData] = useState([])


    return (
        <UseMainData.Provider value={{mainData,setMainData}}>
            <UseCountry.Provider value={{ country, setCountry }}>
                <UseBusqueda.Provider value={{ busqueda, setBusqueda }}>
                    <UseDark.Provider value={{ dark, setDark }}>
                        <Router>
                            <Switch>

                                <Route path={["/", "/country:countryName"]}>

                                    <MainLayout>
                                        <Switch>
                                            <Route path="/country/:countryName" component={CountryInfo} />
                                            <Route path="/" component={Index} />
                                            <Redirect to="/" />
                                        </Switch>
                                    </MainLayout>

                                </Route>

                            </Switch>
                        </Router>
                    </UseDark.Provider>
                </UseBusqueda.Provider>
            </UseCountry.Provider>
        </UseMainData.Provider>
    )
}

export default App

// <BrowserRouter>
//     <Routes>
//         <Route paht="/" element={<MainLayout />}>
//             <Route paht="" element={<Index />} />
//             <Route paht="/country" element={<CountryInfo />} />
//         </Route>
//     </Routes>
// </BrowserRouter>