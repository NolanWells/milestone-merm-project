import React from "react"
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";

export default function Stars() {

    let star = ''
    let rating = 5

    for (let i = 0; i < rating; i++) {
        star += '⭐'
    }

    if (rating == 0){
        star = 'No reviews at this time'
    }

    return (
        
        <Container className="for-control">
            <div style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>{star}</div>
        </Container>
    )

}