import '../css/Favourites.css'
import {useMovieContext} from '../context/MovieContext'
import MovieCard from '../components/MovieCard.jsx'

function Favourites() {

    const{favourites} = useMovieContext()

    if (favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites❤️</h2>
                <div className="favourites-grid">
                    {favourites.map ((movie) => (
                            <MovieCard movie={movie} key = {movie.id} />
                        
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="favourites-empty">
                <h2>Your Favourites List is empty</h2>
                <p>
                    Start adding movies to your favourites to view them here 😘
                </p>
            </div>
        )
    }
    
}
export default Favourites