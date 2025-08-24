import '../css/MovieCard.css'
import {useMovieContext} from '../context/MovieContext'


function MovieCard({movie}) {

    const {isFavourite, addToFavs, removeFromFavs} = useMovieContext()

    const favourite = isFavourite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favourite) removeFromFavs(movie.id)
        else addToFavs(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button 
                    aria-label={favourite ? "Remove from favourites" : "Add to favourites"}
                    className={`favourite-btn ${favourite?"active":""}`}
                    onClick={onFavouriteClick}>
                        {favourite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default MovieCard