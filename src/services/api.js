const API_KEY = "340e2f48e04a6c33b1090051d08510f2";
const Token="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDBlMmY0OGUwNGE2YzMzYjEwOTAwNTFkMDg1MTBmMiIsIm5iZiI6MTc1MTA1ODI1OS40NjgsInN1YiI6IjY4NWYwNzUzOTE0NTQ0NTA4NzE1NWI3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1iVWKKEPmKbl-wb_-L3QU1sTAbzrijiXypdoYscI5ys";
const BASE_URL = "https://api.themoviedb.org/3";


export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}