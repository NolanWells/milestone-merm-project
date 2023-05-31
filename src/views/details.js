import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CardGroup } from "react-bootstrap/esm";

import Reviews from "./Reviews";
import Createreview from "./createReview";

export default function Details() {
  const [details, setDetails] = useState(null);
  const [refreshReviews, setRefreshReviews] = useState(false); // State to trigger refresh


  //this will look at the params and find movie id
  const { movie_id } = useParams()

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

  function handleDeleteReview(reviewId) {
    // Perform deletion logic using the reviewId

    // Trigger refresh of Reviews component
    setRefreshReviews((prevValue) => !prevValue);
  }

  return (
    <Container>
      <CardGroup style={{ border: 'solid black 3px' }}>
        {/* // CARD 1 */}
        <br/>
        <Card
          className="detailsCard1 d-flex flex-column justify-content-center align-items-center"
          key={details && details.id}
          style={{ border: 'solid black 1px', maxHeight: '650px' }}
        >
          <br />
          <br />
          <br />
          <h5>{details && details.original_title}</h5>
          <Card.Img
            variant="top"
            src={getImageUrl(details && details.poster_path)}
            alt="Movie poster"
            style={{ width: "70%", height: "70%", objectFit: "cover", borderRadius: "2%" }}
          />
          <Card.Body><details><summary><b><u>Overview</u></b></summary>{details && details.overview}</details></Card.Body>
          <Card.Body><details><summary><b><u>Other Information</u></b></summary><b>Release Date:</b> {details && details.release_date}<br /><b>Runtime:</b> {details && details.runtime} minutes</details></Card.Body>
          <br/>
        </Card>

        {/* // CARD 2 */}
        <Card style={{ border: 'solid black 1px' }}>
          <br />
          <br />
          <br />
          <Reviews movie_id={movie_id}  onDeleteReview={handleDeleteReview} key={refreshReviews} />
        </Card>

        {/* // CARD 3 */}
        <Card style={{ border: 'solid black 1px' }}>
          <br />
          <br />
          <br />
          <Createreview movie_id={movie_id} /> {/*passing down the id so that we can store it with the comment in the database */}
        </Card>
      </CardGroup>
    </Container>
  );
}
