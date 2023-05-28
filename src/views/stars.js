import { useState, useEffect } from "react";
import React from "react"
import { Container, Card } from "react-bootstrap";
// here I will use axios to request data from the server => databse
import axios from "axios";

export default function Stars({ movie_id }) {
    const [starReviews, setStarReviews] = useState([])

    useEffect(() => {
        axios.get(`/movies/id/${movie_id}`)
            .then((response) => {
                setStarReviews(response.data)
            })
            .catch((err) => console.log(`axios request didnt work :( ${err}`))
    }, [movie_id])

    let star = ''
    let rating = 5

    for (let i = 0; i < rating; i++) {
        star += '⭐'
    }

    if (rating == 0) {
        star = 'No reviews at this time'
    }

    return (

        <Container className="for-control">
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>{star}</div>
        </Container>
    )

}