import { createContext,useContext } from "react";


export const UseBusqueda = createContext(null)

const useBusquedas = () => {
    return useContext(UseBusqueda);
}

export default useBusquedas;