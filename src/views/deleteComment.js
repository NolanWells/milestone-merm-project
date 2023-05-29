import React from "react";
export default function DeleteReview(props) {
    const { movie_id } = props;
    return (
        <div>
            <form action="/movies" method="DELETE">

                {/*passes the movie_id and cannot be seen*/}
                <input type="hidden" name="movie_id" value={movie_id} /> 
                
                <button className = "button-78" type="sumbit">Delete Review</button>
            </form>
        </div>
    );
}