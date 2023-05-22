import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState(null);

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json));
    // .then(json => console.log(json))
  }, []);
  // .catch(err => console.error('error:' + err))

  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };



  return (
   <Container>
      {movies ? (
        movies.results.map((movie) => (
          <Card key={movie.id}>
            <Card.Img
              variant="top"
              src={getImageUrl(movie.poster_path)}
              alt="Movie poster"
            />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
            </Card.Body>
          </Card>
        ))
      ) : (
        "loading.."
      )}
    </Container>
  );
}
