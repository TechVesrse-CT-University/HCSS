import { useState } from "react";
// import './App.css'
import '../../components/ai/ai.css'
import axios from 'axios'
function Ai(){
  const [question, setquestion] = useState('')
  const [answer, setanswer] = useState('')

   async function generateAnswer(){
    setanswer("loading...")
    const response = await axios({
      url : "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDp3tqewwJ_-TwspkuLZ42D9eekDXifAQQ", 
      method:"post",
      data:{
        "contents": [{
    "parts":[{"text": question}]
    }]
      }
    })
    setanswer(response['data']['candidates'][0]['content']['parts'][0]['text'])

   }
   return(
    <>
    <input className="aiinp" placeholder="USE AI" type="text" value={question} onChange={(e)=>setquestion(e.target.value)} />
    <button className="aibtn" onClick={generateAnswer}>GENERATE FROM AI</button>
    <div className="ansai"><p>{answer}</p></div>
    
    </>
  )

}

export default Ai
