import '../css/MovieCard.css'
import { useMoviesContext } from '../services/contexts/MovieContext';
function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavories } = useMoviesContext()
    const favorite = isFavorite(movie.id);
    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavories(movie.id)
        else addToFavorites(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>❤</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard