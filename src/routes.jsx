import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Errors from './pages/Error'
import Favorites from './pages/Favorites'

import Header from './components/Header'

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/movie/:id" element={ <Movie/> }/>
                <Route path="/favorites" element={ <Favorites/> }/>

                <Route path="*" element={ <Errors/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp