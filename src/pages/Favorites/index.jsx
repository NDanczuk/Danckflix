import { useEffect, useState } from 'react'
import './favorites.css'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Favorites(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const myList = localStorage.getItem('@Danckflix')
        setMovies(JSON.parse(myList) || [])
    }, [])

    function removeMovie(id){
        let filterMovies = movies.filter( (movie) => {
            return (movie.id !== id)
        })

        setMovies(filterMovies)
        localStorage.setItem('@Danckflix', JSON.stringify(filterMovies))
        toast.success('Movie removed successfully!')
    }

    return(
        <div className='favorites-list'>
            <h1>Favorites list:</h1>

            {movies.length === 0 && <span>This list looks kinda empty :P</span>}

            <ul>
                {movies.map((movie) => {
                    return(
                        <li key={movie.id}>
                            <span>{movie.title}</span>
                            <div>
                                <Link to={`/movie/${movie.id}`}>See details</Link>
                                <button onClick={() => removeMovie(movie.id)}>Remove</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}