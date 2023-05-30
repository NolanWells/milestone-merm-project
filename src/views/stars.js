import { useState, useEffect } from "react";
import React from "react"
import { Container } from "react-bootstrap";
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


    function averageRating(reviews) {

        if (Object.keys(reviews).length == 0) {
            let star = 'No reviews at this time'
            return star
        } else {
            let totalRating = reviews.reduce((sum, review) => {

                return (
                    sum + review.rating
                )
            }, 0)

            let star = ''
            let rating = Math.round((totalRating / starReviews.length))


            for (let i = 0; i < rating; i++) {
                star += '⭐'
            }

            return star;
        }
    }



    return (
        <Container className="for-control">
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                {averageRating(starReviews)}
            </div>
        </Container>
    )
}