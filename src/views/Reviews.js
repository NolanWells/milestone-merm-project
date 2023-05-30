import { useState, useEffect } from "react";
// here I will use axios to request data from the server => databse
import axios from "axios";
import Card from "react-bootstrap/Card"
import Stars from "./stars";
// import DeleteReview from "./deleteComment";

export default function Reviews({ movie_id, onDeleteReview }) {
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
  function deleteReview(reviewId) {
    axios.delete(`/movies/${reviewId}`)
      .then(() => {
        console.log('The deletion was successful');
        onDeleteReview(reviewId); // Invoke the onDeleteReview callback in parent component
      })
      .catch((err) => console.log(`axios request did not work ${err}`));
  }

  console.log(reviews)
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
              <button className="button-78" style={{ float: 'right' }} onClick={() => deleteReview(review._id)}>Remove Comment</button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  )

}