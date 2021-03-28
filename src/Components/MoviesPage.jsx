import Card from './Card';
import MoviesFetch from './MoviesFetch';

function MoviesPage () {
    const server = "http://localhost:3525";
    const link = "https://image.tmdb.org/t/p/w500";
    const token = "123456789";
    const endPoint = "/movies/" + token;
    const [respuesta, cargando, hasError] = MoviesFetch(server+endPoint)
    return(
        <div>
        {cargando? 
            <div> Loading ... </div>: 
            (hasError? <div> Se produjo un error. </div>:
            (respuesta.map (data => <Card Title={data.title}
            Year={data.release_date.slice(0,4)}
            ImgPath={link + data.poster_path}
            Description={data.overview}
            Title={data.title}
            Vote={data.vote_average}
            Genre={data.genre_ids.toString()}
            Date={data.release_date}
            />)))} 
        </div>
    )
};
export default MoviesPage;