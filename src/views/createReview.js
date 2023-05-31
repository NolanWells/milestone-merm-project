import React from "react";
export default function Createreview(props) {
    const { movie_id } = props;
    return (
        <div>
            <h5 className="d-flex flex-column justify-content-center align-items-center">Add Your Review</h5>
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
                    <label className="d-flex flex-column justify-content-center align-items-center" htmlFor="stars">Star Rating</label>
                </h5>
                <div>
                    <input
                        style={{ position: "absolute", left: "40%" }}
                        placeholder="0"
                        id="rating"
                        name="rating"
                        type="number"
                        step="1"
                        min="0"
                        max="5"
                        required
                    ></input>
                </div>
                <br />
                <button className="button-79" style={{ position: "absolute", left: "34%", marginTop: "10%" }} type="sumbit">Submit</button>
                {/* <form nav="index.html"action="/movies">
                    <button  onclick="history.back()" className="button-79" style={{ position: "absolute", left: "23%", marginTop: "22%" }} type="sumbit">Go Back to Discover</button>
                </form> */}
            </form>
        </div>
    );
}