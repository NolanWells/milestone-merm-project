import Container from "react-bootstrap/esm/Container"
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react";

export default function Home () {
        const [movies, setMovies] = useState(null)      
        useEffect(() => {         
            
            fetch('https://api.themoviedb.org/3/discover/movie?api_key=<<API Key>>')         
            .then(data => data.json())       
            .then(jsonData => setMovies(jsonData))

        }, [])
    

    return(
        <Container>
            <Card>
                {movies ? <pre>{JSON.stringify(movies, null, 2)}</pre> : 'loading..'}
            </Card>
        </Container>
    )

}