import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  //this will look at the params and find movie id
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const movie_id = params.get('data')
  
  const url =
    `https://api.themoviedb.org/3/movie/${movie_id}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjODAwODQ0Y2E3NTAwNTVjNzIwZjdlNDk3MjUzNWYwYiIsInN1YiI6IjY0NjYzZDBkMDA2YjAxMDEwNTg4ZmJiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hBRpnvHiUVIBXbwhW9islWlaKvT-EaccFSPfZtwrvRE'
      }
    };

  // REQUESTS DATA FROM THE API
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json));
      
  }, []);

  // LINKS URL WITH EACH INDIVIDUAL MOVIE IMAGE TO DISPLAY ON WEBPAGE
  const getImageUrl = (posterPath) => {
    const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
    return baseImageUrl + posterPath;
  };

return(
    <Card><h1>Details Page</h1></Card>
);

}