import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './movie-info.css'

import api from "../../services/api"

export default function Movie(){
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadMovie(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: import.meta.env.VITE_MOVIEDB_API_KEY 
                }
            })
            .then((response) => {
                setMovie(response.data)
                setLoading(false)
            })
            .catch(() =>{
                console.log('MOVIE NOT FOUND')
            })
        }

        loadMovie()
    }, [])

    if(loading){
        return(
            <div className="movie-info">
                <h1>Loading movie details...</h1>
            </div>
        )
    }
     
    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>

            <h3>Overview:</h3>
            <span>{movie.overview}</span>

            <strong>Score: {movie.vote_average} / 10</strong>

            <div className="button-area">
                <button>Add to favorites</button>
                <button>
                    <a href='#'>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}