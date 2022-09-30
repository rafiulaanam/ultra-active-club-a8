import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import EachExercise from '../EachExercise/EachExercise';
import './Exercise.css'
const Exercises = (props) => {
    const {setTime}  = props
   const [exercises, setExercises] = useState([])
// console.log(props.setTime())
   useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setExercises(data))
   },[])
   
  

    return (
        <div className='exercise'>
            
            {
                
                exercises.map(exercise=> 
                <EachExercise key={exercise.id} exercise ={exercise} setTime={setTime} ></EachExercise>
                )

            }
        </div>
    );
};

export default Exercises;