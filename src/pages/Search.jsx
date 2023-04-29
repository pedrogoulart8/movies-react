import './MoviesGrid.css'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {

  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  //Responável por buscar os parametros da URL. 
  //Nesse caso iremos dar um 'get' em 'q' e buscar os parametros após o 'q'
  const query = searchParams.get("q")


  //função assincrona responsável por buscar os filmes  
  //função irá aguardar uma url como parâmetro e quando receber dados irá transforma-los em json
  const getSearchedMovies = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)

  }

  //responsável por chamar os filmes de acordo com a palavra que o usuário está buscando e mostra-los na tela.
  useEffect(() => {

    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

    getSearchedMovies(searchWithQueryURL)

  }, [query])


  return (

    <div className="container">
      <h2 className="title">Resultados para: <span className='query-text'>{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && movies.map((movie) =>
          <MovieCard key={movie.id} movie={movie} />
        )}
      </div>
    </div>

  )

}

export default Search