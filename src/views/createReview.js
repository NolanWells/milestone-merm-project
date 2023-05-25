import React from "react";
export default function Createreview( props ) {
  const { movie_id } = props;
  return (
    <div>
      <h5>Add Your Review</h5>
      <form action="/movies" method="POST">
      <input type="hidden" name="movie_id" value={movie_id} /> {/*passes the movie_id and cannot be seen*/}
        <label htmlFor="review"></label>
        <textarea
          className="form-control"
          placeholder="Write your comment"
          type="text"
          name="comment"
          id="comment"
          required
        ></textarea>
        <br />
        <br />
        <h5>
          <label htmlFor="stars">Star Rating</label>
        </h5>
        <input
          className="form-control"
          id="rating"
          name="rating"
          type="number"
          step=".5"
          min="0"
          max="5"
          required
        ></input>
        <br />

        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
}
