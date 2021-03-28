import MoviesFetch from './MoviesFetch';

function MoviesPage () {
    const server = "http://localhost:3525";
    const token = "123456789";
    const endPoint = "/movies/"+ token;
    const [respuesta, cargando, hasError] = MoviesFetch(server+endPoint)
    return(
        <div>
        {cargando? 
            <div> Loading ... </div>: 
            (hasError? <div> Se produjo un error. </div>:
            //(respuesta.map (data => <div> {data} </ div >)))} 
            <div> {respuesta} </div>)} 
        </div>
    )

};
export default MoviesPage;