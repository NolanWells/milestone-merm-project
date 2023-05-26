import React from "react"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

export default function Stars() {

    let star = ''
    let rating = 3

    for (let i = 0; i < rating; i++) {
        star += '⭐'
    }

    return (
        <Container className="for-control">
            <Card className="d-flex flex-column justify-content-center align-items-center">{star}</Card>
        </Container>
    )

}