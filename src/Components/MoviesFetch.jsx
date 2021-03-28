import { useEffect, useState } from "react";


function MoviesFetch(url){
    const [Loadign, setLoading] = useState(false);
    const [State, setState]= useState([]);
    const [HasError, setHasError]= useState(false);

    useEffect(() => {
        setLoading(true)
        console.log("la url", url)
        fetch(url).then( res => res.json())
        .then( res => {
                console.log("las pelis" , res.results)
                console.log("los generos", res.genres)
                setState(res.results);
                setLoading(false)})
        .catch(err => {
            setHasError(true)
            setLoading(false)})
    },[url]);

    return [State, Loadign, HasError]
};
export default MoviesFetch;
    