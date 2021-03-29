import Card from './Card';
import useFetch from './useFetch';
import Vector from './Icons/Vector.png';
import FilterIcon from './Icons/FilterIcon.png';
import ArrowIcon from './Icons/ArrowIcon.png';
import '../Styles/MoviesPageStyle.css'
import { useState } from 'react';

function MoviesPage () {
    const server = "http://localhost:3525";
    const link = "https://image.tmdb.org/t/p/w500";
    const token = "123456789";
    const endPoint = "/movies/" + token;
    const [genreSelected, setGenreSelected]=useState([])
    const [idSelected, setIdSelected] =useState()
    
    /*const [respuesta, setRespuesta]=useState([])
    const [cargando, setCargando]=useState(false)
    const [hasError, setHasError]=useState(false)
    const [generos, setGeneros]=useState([])
    const fetchReturn = useFetch(server+endPoint)
    setRespuesta(fetchReturn[0])
    setCargando(fetchReturn[1])
    setHasError(fetchReturn[2])
    setGeneros(fetchReturn[4])*/

    const [respuesta, cargando, hasError, generos] = useFetch(server+endPoint)
    const [paramMovie, setParamMovie] = useState("")

    function mapGenres(arr){
        var genreNames = []
        var r = ""
        for(var j=0 ; j<arr.length; j++){
            for(var i in generos){
                if(arr[j] === generos[i].id){
                    genreNames.push(generos[i].name)
                }
            }
        }
        r = genreNames.join(', ')
        return r
    }

    function searchMovie(e){
        e.preventDefault()
        console.log(paramMovie)
        //var resultSearch = respuesta.filter( x => x.title === paramMovie)
        //setRespuesta(resultSearch)
        
    }
    function theMovie(e){
        e.preventDefault()
        setParamMovie(e.target.checked)

    }

    function checkOnChange(e){
        e.preventDefault()
        setIdSelected(e.target.id.toString())
        console.log(e.target.id)
        console.log(e.target.defaultValue)
        if(genreSelected.includes(idSelected)){
            var i = genreSelected.indexOf(idSelected)
            if( i !== -1){
                var result = genreSelected.splice(i,1)
                setGenreSelected(result)
                console.log("se ha eliminado", genreSelected)
            }
        }else{
            genreSelected.push(idSelected)
            setGenreSelected(genreSelected)
            console.log("se ha añadido", genreSelected)
        }
        console.log("final al ejecutar", genreSelected)
    }

    return(
        <div>
            <div><h4>Películas</h4></div>
            <div className="toolsContainer">
                <label className="label1">
                <input className="input" type="text" onChange={theMovie}></input>
                <button className="vectorIcon" onClick={searchMovie}>
                    <img  src={Vector} alt="icon"></img>
                </button>
                </label>
                <div className="vertical"></div>
                <div className="dropdown">
                    <button className="filterIcon">
                        <img src={FilterIcon} alt="icon"></img>
                    </button>

                    <div className="dropdown-content">
                        <label className="label-title-dropdown">Género</label>
                        {cargando?
                        <div>Cargando Géneros...</div>:
                        (hasError? <div> Se produjo un error.</div>:
                        (generos.map (genero =>
                            <div className="options" key={genero.id}> 
                            <input className="input-check-box" type="checkbox" 
                                id={genero.id} 
                                defaultValue={true}
                                onChange={checkOnChange}></input>
                            <label className="label-check-box">  {genero.name}</label>
                            </div> )))}
                    </div>
                </div>

                <div className="vertical2"></div>

                <label className="label2">Ordenar </label>
                <div className="dropdown-arrow">
                    <button className="arrowIcon" >
                        <img src={ArrowIcon} alt="icon"></img>
                    </button> 
                    <div className="dropdown-content-arrow">
                        <div>
                            <div>
                                <label className="label-dropdown-arrow">Fecha</label>
                            </div>
                            <div>
                                <button className="button-dropdown-arrow">Nuevas - Antiguas</button>
                            </div>
                            <div>
                                <button className="button-dropdown-arrow">Antiguas - Nueva</button>
                            </div>
                        </div>
                        <div>
                            <div>
                            <label className="label-dropdown-arrow">Calificación</label>
                            </div>
                            <div>
                                <button className="button-dropdown-arrow">0 - 10 puntos</button>
                            </div>
                            <div>
                                <button className="button-dropdown-arrow">10 - 0 puntos</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
            {cargando? 
                <div> Cargando Peliculas ... </div>: 
                (hasError? <div> Se produjo un error. </div>:
                (respuesta.map (data => <Card key={data.id} Title={data.title}
                Year={data.release_date.slice(0,4)}
                ImgPath={link + data.poster_path}
                Description={data.overview}
                Vote={data.vote_average}
                Genre={mapGenres(data.genre_ids)}
                Date={data.release_date}
                />)))} 
            </div>
        </div>
    )
};
export default MoviesPage;