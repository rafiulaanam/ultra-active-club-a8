import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EachExercise.css'
import logo from '../../image/img1.jpeg'
const EachExercise = ({exercise}) => {
    const {name,discription} = exercise
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {discription}
        </Card.Text>
        <Button variant="primary">Add to List</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default EachExercise;

