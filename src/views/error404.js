import Container from "react-bootstrap/esm/Container"
// import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function error404 () {
    useEffect(() => {

    })

    return(
        <Container>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src='/images/404ConfusedDog.avif' alt='Picture of a dog'></img>
                    <div>Photo by <a href='https://unsplash.com/@charlesdeluvio'>Chad Montano</a> on <a href='https://unsplash.com/s/photos/food'>Unsplash</a>
                    </div>
                </div>
            </main>
        </Container>
    )
}

