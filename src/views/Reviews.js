import { useState, useEffect } from "react";
// here I will use axios to request data from the server => databse
import axios from "axios";
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

export default function Reviews ( {movie_id} ) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`/movies/id/${movie_id}`)
            .then((response) => {
                setReviews(response.data)
            })
            .catch((err) => console.log(`axios request didnt work :( ${err}`))
    }, [movie_id])

    return (
        <>
          <h5>This is my Reviews</h5>
          <p>Movie ID: {movie_id}</p>
          <br />
          <CardGroup>
          {reviews.map((review, index) => (
            <Card.Body key={index}>
                <Card.Text>Comment: {review.comment}</Card.Text>
                <Card.Text>Rating: {review.rating}</Card.Text>
            </Card.Body>
            ))}
          </CardGroup>
        </>
      )   

}