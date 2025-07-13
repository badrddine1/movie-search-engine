import MovieCard from '../components/MovieCard';
import '../css/MovieCard.css'
import { useMoviesContext } from '../services/contexts/MovieContext'
function Favorites() {
    const { favorites } = useMoviesContext();
    console.log(favorites);
    if (favorites) {
        return (
            <div className='favorites'>
                <h2>your Favvorites</h2>
                <div className='movies-grid'>
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        )
    }
    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding moives to you favorites and they will appear here!</p>
    </div>
}

export default Favorites