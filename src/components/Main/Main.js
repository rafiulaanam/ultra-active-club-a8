import React, { useState } from 'react';

import { addToDb, getStoredTime } from '../../utilities/timedb';
import Exercises from '../Exercises/Exercises';
import SideProfile from '../SideProfile/SideProfile';
import './Main.css'
const Main = () => {
    




    const [time, setTime]= useState([])
    const gym =(timee,id)=>{
        
      
      const newTime = [...time, timee ]
      setTime(newTime)
      
      addToDb(id.id)
     
    }

    return (
        <div className='main1'>
           <div> <Exercises setTime={gym}></Exercises></div>
            <div><SideProfile time={time}></SideProfile></div>
            
        </div>
    );
};

export default Main;