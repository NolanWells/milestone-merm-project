export default function Createreview () {
    return(
        <div>
            <h5>Add Your Review</h5>
            <form action="/movies" method="POST">
                <label htmlFor="review"></label>
                <input
                    className="form-control"
                    placeholder="Write your review"
                    type="text"
                    name="review"
                    id="review"
                    
                    required

                ></input>
                <br/>
                <br/>
                <h5><label htmlFor="stars" >Star Rating</label></h5>
                <input
                    className="form-control"
                    id="stars"
                    name="stars"
                    type="number"
                    step=".5"
                    min="0"
                    max="5"
                    required
                ></input>
                <br/>

                <button type="sumbit">Submit</button>


            </form>
        </div>
    )
}