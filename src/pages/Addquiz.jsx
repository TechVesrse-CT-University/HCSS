import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/addquiz.css"
import Ai from '../components/ai/Ai';
const Addquiz = () => {
  const nav = useNavigate();
  const [formdata, setformdata] = useState({
    ques: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correct: ''
  });

  const [questions, setQuestions] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(5);
  const [timePerQuestion, setTimePerQuestion] = useState(20); // default 20 seconds

  const handlesubmit = (e) => {
    e.preventDefault();
    const { ques, option1, option2, option3, option4, correct } = formdata;
    if (!ques || !option1 || !option2 || !option3 || !option4 || !correct) {
      alert('Please fill in all fields and select the correct answer.');
      return;
    }

    const updated = [...questions, formdata];
    setQuestions(updated);

    setformdata({
      ques: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      correct: ''
    });

    if (updated.length === parseInt(totalQuestions)) {
      const quizPayload = { questions: updated, totalQuestions, timePerQuestion };
      localStorage.setItem('quizData', JSON.stringify(quizPayload));
      // nav('/teacher/addquiz', { state: quizPayload });
      alert(`YOU HAVE ENTERED ${updated.length} QUESTION`)
    }
  };

  const handleClear = () => {
    localStorage.removeItem('quizData');
    alert('PREVIOUS QUESTION DELETED');
    setQuestions([]);
  };

  return (
    <div className='addquiz'>
      <form onSubmit={handlesubmit}>
        <div className='mn' >
          <div className='bd'>
            <h3 className='adiz'>Welcome, To QUIZOO</h3>

            <div className='cnt'>
              <label className='txt'>Total Questions:</label>
              <input 
                type='number'
                value={totalQuestions}
                onChange={(e) => setTotalQuestions(e.target.value)}
                className='qsinp'
                min={1}
                required
              />

              <label className='txt'>Timer Per Question (seconds):</label>
              <input
                type='number'
                value={timePerQuestion}
                onChange={(e) => setTimePerQuestion(e.target.value)}
                className='qsinp'
                min={5}
                required
              />

              <label htmlFor='ques' className='txt'>
                Add Question
              </label>
              <input
                name='ques'
                value={formdata.ques}
                onChange={(e) => setformdata({ ...formdata, [e.target.name]: e.target.value })}
                type='text'
                className='qsinp'
                placeholder='Enter Question'
                required
              />

              {[1, 2, 3, 4].map((n) => {
                const optKey = `option${n}`;
                return (
                  <input
                    key={optKey}
                    name={optKey}
                    value={formdata[optKey]}
                    onChange={(e) => setformdata({ ...formdata, [e.target.name]: e.target.value })}
                    type='text'
                    className='qsinp'
                    placeholder={`Option ${n}`}
                    style={{ color: 'black' }}
                  />
                );
              })}

              <label className='txt'>Select Correct Option:</label>
              <select
                name='correct'
                value={formdata.correct}
                onChange={(e) => setformdata({ ...formdata, correct: e.target.value })}
                className='qsinp'
              >
                <option value=''>--Select Correct Option--</option>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
                <option value='option4'>Option 4</option>
              </select>
            </div>

            <div className=''>
              <button type='submit' className='bb'>
                Add Question
              </button>
              <button
                type='button'
                onClick={handleClear}
                className='bb'
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className='aai'>
       
        <Ai/>
      </div>
    </div>
    
  );
};

export default Addquiz;
