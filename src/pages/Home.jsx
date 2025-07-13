import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import '../css/home.css'
import { getPopularMovies, searchMovies } from "../services/api";
function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setError('Faild to loead the movies...')
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])
    const handelSearch = async (e) => {
        e.preventDefault();
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true);
        try{
            const searchResults =  await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null) 
        }catch (erorr){
            console.log(erorr);
            setError("Faild to search movie");
        }finally{
            setLoading(false);
        }
    };
    return (
        <div className="home">
            <form onSubmit={handelSearch} className="search-form">
                <input className="search-input"
                    placeholder="Search for movies ..." type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            {error && <div className="erorr-message">{error}</div>}
            {loading ? (<div className="loading">Loading...</div>) : (<div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>)}

        </div>
    )
}
export default Home