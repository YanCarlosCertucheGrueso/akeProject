import '../Styles/cardStyle.css';
import '../Icons/Star3.png'
function Card(){
    return(
        <div className="card">

            <div className="header">
                <div className="title">
                    <label>El Club de la Lucha (1999)</label>
                </div>
            </div>

            <div className="img">
            <img width="100%"  alt='hola' src='https://image.tmdb.org/t/p/w500/1yWmCAIGSVNuTOGyz9F48W9g1Ux.jpg'></img>
            </div>

            <div className="right">
                <div className="overview">
                    Un joven sin ilusiones lucha contra su insomnio, consecuencia quizás de su hastío por su gris y rutinaria vida. En un viaje en avión conoce a Tyler Durden, un carismático vendedor de jabón que sostiene una filosofía muy particular: el perfeccionismo es cosa de gentes débiles; en cambio, la autodestrucción es lo único que hace que realmente la vida merezca la pena. Ambos deciden entonces formar un club secreto de lucha donde descargar sus frustaciones y su ira que tendrá un éxito arrollador.
                </div>
                <div className="description">
                    <div>
                        <label className="label">Titulo: </label>
                        <label>titulo pelicula</label>
                    </div>
                    <div>
                        <label className="label">Calificación: </label>
                        <img className="star" alt ="icon" src='../Icons/Star3.png'></img>
                    </div>
                    <div>
                        <label className="label">Genero: </label>
                        <label>los generos</label>
                    </div>
                    <div>
                        <label className="label">Fecha de realización: </label>
                        <label>fecha</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Card;