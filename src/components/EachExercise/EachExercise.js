import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './EachExercise.css'


const EachExercise = ({exercise,addToList}) => {
    const {name,discription,time,age,img} = exercise
  
  
    return (
        <div>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {discription} <br></br><br></br>
         <b> For Age: {age.young}</b> <br></br>
         <b> Time: {time}s</b>
        </Card.Text>
        <Button variant="primary" onClick={addToList}>Add to List</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default EachExercise;

