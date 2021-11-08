import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import CountryInfo from './pages/CountryInfo'
import Index from './pages/Index'
import { UseDark } from './context/useDark';

const App = () => {

    const [dark,setDark] = useState(false)

    return (
        <UseDark.Provider value = {{dark,setDark}}>
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