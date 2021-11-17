import { createContext,useContext } from "react";

export const UseMainData = createContext(null)

export const useData = () => {
    return useContext(UseMainData);
}