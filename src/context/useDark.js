import { createContext,useContext } from "react";


export const UseDark = createContext(null)

const useDarkMode = () => {
    return useContext(UseDark);
}

export default useDarkMode