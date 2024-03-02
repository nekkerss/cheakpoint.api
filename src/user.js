import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
import { Card } from 'react-bootstrap';

const User = ({user}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Hello
        </Card.Text>
    
      </Card.Body>
    </Card>
  )
}

export default User