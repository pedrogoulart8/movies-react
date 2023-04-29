import { Link } from "react-router-dom"
import { FaStar } from 'react-icons/fa'

import './MovieCard.css'

let imageUrl;

if (window.innerWidth <= 540) {
  // tamanho para telas menores que 540px
  imageUrl = "https://image.tmdb.org/t/p/w300/"; 
} else {
  // tamanho para telas maiores que 540px
  imageUrl = "https://image.tmdb.org/t/p/w500/"; 
}


//component utilizará as propiedades de 'movie' para suas ações
const MovieCard = ({movie, showLink = true}) => {

  return (

    <div className="movie-card">
        <img className="imagem" src={imageUrl + movie.poster_path} alt={`Poster de ${movie.title}`} />
        <h2>{movie.title}</h2>
        <p>
            <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link className="link" to={`/movie/${movie.id}`} >Detalhes</Link>}
    </div>

  )

}

export default MovieCard