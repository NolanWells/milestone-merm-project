import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
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

  // REQUESTS DATA FROM THE API
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setMovies(json));
  }, []);

  // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO DISPLAY ON WEBPAGE
  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };

  return (
   <Container>
      <div className="d-flex flex-wrap">
        {movies ? (
          // CREATES A CARD FOR EACH MOVIE IMAGE
          movies.results.map((movie) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
            <Card 
              className="d-flex flex-column justify-content-center align-items-center" 
              key={movie.id}
              style={{ width: "200px", height: "400px", marginTop: "50px" }}
              >
              <Card.Img
                variant="top"
                src={getImageUrl(movie.poster_path)}
                alt="Movie poster"
                style={{ width: "200px", height: "300", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Nav>
                  <Nav.Item>
                    <Nav.Link href={`/details?data=${movie.id}`}>
                      <Link to={`/details?data=${movie.id}`}>Movie Details</Link>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
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
