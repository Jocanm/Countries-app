import {useEffect,useRef,useState} from "react"

const useFetch = (url) => {

    const isMounted = useRef()

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        isMounted.current = true;
        // console.log(isMounted.current)
        return () => {
            isMounted.current = false;
        }
    }, [isMounted])

    useEffect(() => {

        setState({data: null,loading: true,error: null})

        fetch(url)
        .then(resp=>{
            console.log("Pidiendo la info nuevamente");
            return resp.json();
        })
        .then(data=>{
            isMounted.current && setState({
                loading:false,
                error:null,
                data
            })
        })
        .catch(err=>{
            setState({
                loading:false,
                error:"No se pudo encontrar la información",
                data:null
            })
        })

    }, [url])

    return state;

}

export default useFetch;