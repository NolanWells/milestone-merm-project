
export function New(){
    return(
        <div>
            <h2>Add a New Movie</h2>
            <form action="/movies" method="POST">
                <label htmlFor="name">Movie Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                ></input>
                <label htmlFor="movie poster">Movie Poster</label>
                <input
                    type="text"
                    name="movie poster"
                    id="movie poster"
                    required
                ></input>
                <label htmlFor="release date">Release Date</label>
                    <input
                    type="text"
                    name="release date"
                    id="release date"
                    required
                    ></input>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"

                ></input>
                <label htmlFor="stars" >Star Rating</label>
                <input
                    className="form-control"
                    id="stars"
                    name="stars"
                    type="number"
                    step=".5"
                    min="0"
                    max="5"
                ></input>
                <br/>

                <input type="sumbit"></input>


            </form>
        </div>
    )
}