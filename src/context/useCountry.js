import { createContext, useContext } from "react";

export const UseCountry = createContext(null)

export const useCountry = () => useContext(UseCountry)