import { useState, useEffect } from "react";
// here I will use axios to request data from the server => databse
import axios from "axios";


export default function Reviews ( {movie_id} ) {
    const [reviews, setReviews] = useState('empty')

    useEffect(() => {
        axios.get(`/movies/id/${movie_id}`)
            .then((response) => {
                setReviews(response)
            })
            .catch((err) => console.log(`axios request didnt work :( ${err}`))
    }, [])

    return(
        <>
            <h5>This is my Reviews</h5>
            {movie_id}
            <br></br>
            <p>the review is {reviews}</p>
        </>
    )   

}