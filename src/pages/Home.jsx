import './MoviesGrid.css'

import { useState, useEffect } from "react"

import MovieCard from "../components/MovieCard"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

    const [topMovies, setTopMovies] = useState([])

    //função assincrona responsável por buscar os melhores filmes 
    //função irá aguardar uma url como parâmetro e quando receber dados irá transforma-los em json
    const getTopRatedMovies = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)

    }

    //responsável por chamar os melhores filmes sempre que a pagina for carregada.
    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

        getTopRatedMovies(topRatedUrl)

    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
        </div>
    )

}

export default Home