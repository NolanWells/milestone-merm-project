import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [movies, setMovies] = useState(null);

  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE",
    },
  };

  useEffect(() => {
    //this request data from themovieAPI
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json));
    // .then(json => console.log(json))
  }, []);
  // .catch(err => console.error('error:' + err))

  //this will take the "poster_path" property and combine to base path 
  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };



  return (
   <Container>
      <div className="d-flex flex-wrap">
        {movies ? (
          //this will make cards for every movie
          movies.results.map((movie) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
            <Card 
              className="d-flex flex-column justify-content-center align-items-center" 
              key={movie.id}
              style={{ width: "200px", height: "300px" }}
              >
              <Card.Img
                variant="top"
                src={getImageUrl(movie.poster_path)}
                alt="Movie poster"
                style={{ width: "150px", height: "auto", objectFit: "cover" }}
                className="rounded-circle"
              />
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
              </Card.Body>
            </Card>
            </div>
          ))
        ) : (
          "loading.."
        )}
      </div>
    </Container>
  );
}
