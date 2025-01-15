import { Link } from 'react-router-dom'
import './error.css'
import totoroImage from '../../img/totoro.png'

export default function Errors(){
    return(
        <div className="not-found">
            <img src={totoroImage} alt='totoro'/>
            <h1>404</h1>
            <h2>Page not found!</h2>
            <Link to="/">See all movies!</Link>
        </div>
    )
}