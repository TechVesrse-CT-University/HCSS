import { useState } from 'react'
import pic2 from '../../assets/pic-2.jpg'
import { Link } from 'react-router-dom'
import "./style.css"
function App() {

  return (
    
<div className="box">
  <div className='bxout'>
     <h2 className="ins-head">Capital Hunt</h2><img src={pic2} className="capital" alt=""/>
     
    <p className="ins-head2">Guess the capital of states</p>
    <div className="innerbox"><h3 className="ins-head3">Instructions</h3>
    <ul className="list">
    <li>1.Read each question carefully</li>
    <li>2.Select the correct answer from option</li>
    <li>3.Time limit of 10 minutes will be there for answering the question</li>
    <li>4.Your final score will be shown after submission</li>
    <li>5.Don't refresh or close the window during quiz</li>
    <li>6.Click on login to begin the quiz</li>
</ul></div>
<button className="btn2"> <Link to={"/login"}>Login</Link> </button>
</div>
</div>

    
  )
}

export default App
