import { useEffect, useState } from "react";


function useFetch(url){
    const [Loadign, setLoading] = useState(false);
    const [State, setState]= useState([]);
    const [HasError, setHasError]= useState(false);
    const [Genre, setGenre] = useState([])

    useEffect(() => {
        setLoading(true)
        console.log("la url", url)
        fetch(url).then( res => res.json())
        .then( resu => {
                console.log("las pelis" , resu.results)
                console.log("los generos", resu.genres)
                setState(resu.results);
                setGenre(resu.genres)
                setLoading(false)})
        .catch(err => {
            setHasError(true)
            setLoading(false)})
    },[]);

    return [State, Loadign, HasError, Genre]
};
export default useFetch;
    