import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap/esm";

export default function Home() {
  const [details, setDetails] = useState(null);

  //this will look at the params and find movie id
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const movie_id = params.get('data')

  const url =
    `https://api.themoviedb.org/3/movie/${movie_id}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE'
    }
  };

  // REQUESTS DATA FROM THE API
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, []);

  // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO DISPLAY ON WEBPAGE
  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };

  return (
    <Container>
      <CardGroup>
        {/* // CARD 1 */}
        <Card
          className="d-flex flex-column justify-content-center align-items-center"
          key={details && details.id}
        >
          <h5>{details && details.original_title}</h5>
          <Card.Img
            variant="top"
            src={getImageUrl(details && details.poster_path)}
            alt="Movie poster"
            style={{ width: "200px", height: "300", objectFit: "cover" }}
          />
          <Card.Body><details><summary><b><u>Overview</u></b></summary>{details && details.overview}</details></Card.Body>
          <Card.Body><details><summary><b><u>Other Information</u></b></summary><b>Release Date:</b> {details && details.release_date}<br /><b>Runtime:</b> {details && details.runtime} minutes</details></Card.Body>
        </Card>

        {/* // CARD 2 */}
        <Card>
          <Card.Body>Reviews</Card.Body>
        </Card>

        {/* // CARD 3 */}
        <Card>
          <Card.Body>Add Your Review</Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}