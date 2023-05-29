import { useState, useEffect } from "react";
// here I will use axios to request data from the server => databse
import axios from "axios";
import Card from "react-bootstrap/Card"

import Stars from "./stars";
import DeleteReview from "./deleteComment";

export default function Reviews({ movie_id }) {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    axios.get(`/movies/id/${movie_id}`)
      .then((response) => {
        setReviews(response.data)
      })
      .catch((err) => console.log(`axios request didnt work :( ${err}`))
  }, [movie_id])

  function starRating(rating) {
    let star = ''

    for (let i = 0; i < rating; i++) {
      star += '⭐'
    }
    return star;
  }

  return (
    <>
      <h5 className="d-flex flex-column justify-content-center align-items-center">Movie Reviews</h5>
      {/* <p>Movie ID: {movie_id}</p> */}
      <br />
      <Card.Title><Stars movie_id={ movie_id } /></Card.Title>
      <div className="postedReviews" style={{ maxHeight: '530px' }}>
      {reviews.map((review, index) => (
          <Card key={index} className="mb-3">
            <Card.Body style={{ background: 'linear-gradient(90deg, #fdfcfb, #778899)'}} >
              <Card.Text>Comment: {review.comment}</Card.Text>
              <Card.Text>Rating: {starRating(review.rating)}</Card.Text>
              <DeleteReview />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )

}