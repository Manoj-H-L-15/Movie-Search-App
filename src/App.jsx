
import { useState } from "react";
import SearchBar from "./Components/SearchBar.jsx";
import MovieList from "./Components/MovieList.jsx";
import { searchMovies } from "./Services/MovieService.js";
import "./App.css";

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {

    if (!query) return;

    setLoading(true);
    setError("");

    try {

      const data = await searchMovies(query);

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError("No movies found");
      }

    } catch (err) {

      setError("Error fetching movies");

    }

    setLoading(false);

  };

  return (
    <div className="container">

      <h1>Movie App</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      <MovieList movies={movies} />

    </div>
  );
}

export default App;