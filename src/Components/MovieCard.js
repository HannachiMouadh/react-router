import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


export default function MovieCard({Movie}) {
    return (
        <div style={{color:"black"}}>
            <Card style={{ width: '18rem' }}>
            <Link to={`/Description/${Movie.id}`}><Card.Img variant={Movie.name} src={Movie.posterUrl} /></Link>
            <Card.Body>
                <Card.Title>{Movie.name}</Card.Title>
                <Card.Text>
                {Movie.Year}
                </Card.Text>
                <Card.Text>
                {Movie.descrption}
                </Card.Text>
                <ReactStars
                    count={5}
                    value={Movie.rating}
                    size={24}
                    activeColor="#ffd700"
                />
                
            </Card.Body>
            </Card>
        </div>
    )
}
