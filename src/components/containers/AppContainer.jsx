import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import useMediaQuery from '@mui/material/useMediaQuery';

import { MainLayout } from "../"
import PortfolioContext from "../../context/PortfolioContext"

/* AppContainer is Wraper for App.js */
const AppContainer = ({ children }) => {

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme : dark)')
    const [mode, setMode] = useState()
    
    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light")
    }, [prefersDarkMode])

    // const handleChangeMode = () => {
    //     setMode(prevMode => prevMode === "dark" ? "light" : "dark")
    // }

   

    return (
        <MainLayout mode={mode}>
            <HelmetProvider>
                <PortfolioContext.Provider value={{
                  

                }}>
                    {children} {/* App.js content */}

                </PortfolioContext.Provider>

            </HelmetProvider>
          
        </MainLayout>
    );
}

export default AppContainer;
