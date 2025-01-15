import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import './movie-info.css'

import api from "../../services/api"

export default function Movie(){
    const { id } = useParams()
    const navigate = useNavigate()
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
                navigate('/404', {replace: true})
            })
        }

        loadMovie()
    }, [navigate, id])

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
                    <a target="blank" rel="external" href={`https://youtube.com/results?seatch_query=${movie.title}`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}