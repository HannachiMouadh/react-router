import React from 'react'
import { useParams } from 'react-router-dom'
import { Col,Container,Row } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export const Description = ({Movies}) => {
    const params=useParams()
     let movie = Movies.find((el)=>(el.id==params.id))
     console.log(movie.posterUrl)
    return (
        <div>
            <Container>
                <Row>
                    <Col ><img src={movie.posterUrl} alt="movie" style={{width:"70%"}}></img></Col>
                    <Col ><Row>
                    <Row><h1>{movie.name}</h1></Row>
                        <Row><h1>{movie.Year}</h1></Row>
                        <Row><h3>{movie.descrption}</h3></Row>
                        <Row><ReactStars
                    count={5}
                    value={movie.rating}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                /></Row>
                        <Row><Row><p>Movie trailer:</p></Row><video width="750" height="350" controls >
      <source src={movie.trailer} type="video/mp4"/>
     </video></Row></Row></Col>
                </Row>
                </Container>
        </div>
    )
}
