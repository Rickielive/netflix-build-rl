// Typically we would store in {process.env/API_KEY})
const API_KEY = "b557e5063856e8bd3d37a70d7c98ca5b";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `I/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/moviesk?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/moviesk?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/moviesk?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/moviesk?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/moviesk?api_key=${API_KEY}&with_genres=99`,
};

export default requests;