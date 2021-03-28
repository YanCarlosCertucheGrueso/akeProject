import '../Styles/cardStyle.css';
import '../Icons/Star3.png'
function Card(props){
    return(
        <div className="card">

            <div className="header">
                <div className="title">
                    <label>{props.Title || "Title"}  {"("+props.Year+")" || "(año)"}</label>
                </div>
            </div>

            <div className="img">
            <img width="100%"  alt='hola' src={props.ImgPath ||'https://image.tmdb.org/t/p/w500/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg'}></img>
            </div>

            <div className="right">
                <div className="overview">
                    {props.Description || "descripción"}
                </div>
                <div className="description">
                    <div>
                        <label className="label">Titulo: </label>
                        <label>{props.Title || "titulo pelicula"}</label>
                    </div>
                    <div>
                        <label className="label">Calificación: </label>
                        <label>{props.Vote +" " || "8.5"}</label>
                        <img className="star" alt ="icon" src='../Icons/Star3.png'></img>
                    </div>
                    <div>
                        <label className="label">Género: </label>
                        <label>{props.Genre || "los generos"}</label>
                    </div>
                    <div>
                        <label className="label">Fecha de realización: </label>
                        <label>{props.Date || "fecha" }</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;