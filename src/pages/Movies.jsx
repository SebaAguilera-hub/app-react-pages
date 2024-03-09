import React from 'react'
import data from "../data.json"
import { Button, Card } from 'react-bootstrap'

export const Movies = () => {
  return (
    <div>
        {
            data.movies.map(movie=>(
                <Card key={movie.id} style={{width:"18rem"}}>
                    <Card.Img variant='top' src={movie.img} />
                    <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.year}</Card.Text>
                    <Button>Ver Detalle</Button>
                    </Card.Body>
                </Card>
            ))
        }
    </div>
  )
}
