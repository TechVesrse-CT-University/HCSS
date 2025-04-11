import React from 'react'
import pic1 from '../../assets/pic-1.jpg'
import './front.css'
import { Link } from 'react-router-dom'


const Front = () => {
  return (
    <div className="front">
    <h3  className='head'>QUIZOO !</h3>
    <h4 className='head2'>unleash the Best of your brain </h4>
    <div className='main'><img src={pic1}  ></img></div>
    
    
    <div className='btn1'>
          <Link to={"/instruction"}>Read Instruction</Link>
        </div>
    
    
    
    </div>
  )
}

export default Front