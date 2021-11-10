import {createContext, useContext} from 'react'

export const UseRegion = createContext(null)

const useRegion = () => {
    return useContext(UseRegion);
}

export default useRegion;

