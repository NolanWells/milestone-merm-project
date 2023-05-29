import React from "react";
// import Reviews from "./Reviews";


export default function DeleteReview(props) {
    const { movie_id } = props;
    return (
        <div>
            <form method="DELETE" action="/movies">

                {/*passes the movie_id and cannot be seen*/}
                <input type="hidden" name="movie_id" value={movie_id} /> 
                <label htmlFor="review"></label>

                <button className = "button-78" type="submit" style={{ float: 'right' }} >Delete Review</button>
            </form>
        </div>
    );
}