import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import tropy from "../assets/pic-5.jpg";
import './css/student.css'
import axios from 'axios';
const Student = () => {
  const location = useLocation();
  const quizData = location.state || JSON.parse(localStorage.getItem('quizData')) || {};

  const questions = quizData.questions || [];
  const timePerQuestion = parseInt(quizData.timePerQuestion) || 20;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timePerQuestion);
  const [isQuizActive, setIsQuizActive] = useState(true);
  const currentQuestion = questions[currentIndex];


  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        endQuizDueToSwitch("You switched tabs! Quiz ended.");
      }
    };

    const handleBlur = () => {
      endQuizDueToSwitch("You switched windows! Quiz ended.");
    };

    const endQuizDueToSwitch = (message) => {
      alert(message);
      setIsQuizActive(false);
      // submitQuiz();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  if (!isQuizActive) {
    return <div>Quiz ended due to tab/window switch. Your score: {()=>{getScore()}}</div>;
  }


  useEffect(() => {
    setTimeLeft(timePerQuestion);
  }, [currentIndex, timePerQuestion]);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (currentIndex === questions.length - 1) {
            setSubmitted(true);
          } else {
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
          return timePerQuestion;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentIndex, submitted, questions.length, timePerQuestion]);

  const handleOptionChange = (e) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentIndex] = e.target.value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    setSubmitted(true);
  };


  const goNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getScore =  () => {
    let result = questions.reduce((score, q, i) => (answers[i] === q.correct ? score + 1 : score), 0);
    localStorage.setItem("score", result)
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const _id = user._id
    // console.log(_id);
    axios.post("http://localhost:3000/api/update", { _id: _id, score: result })
    .then((response) => {
      console.log("Score updated successfully:", response.data);
    })
    return result;
  };

  return (
    <div className='student'>
      <h1 className='quizhd'>Quiz Time</h1>

      {!submitted ? (
        <>
          <div className='ques'>
            <div className='myqs'>
            <p className='question'>
              Question {currentIndex + 1} of {questions.length}
            </p>
            <p className='question'>⏳ {timeLeft}s</p>
            </div>
           
          </div>

          <div className='boxque'>
         
            <form className='options'>
            <p className='qsmain'>{currentQuestion.ques}</p>
              {[1, 2, 3, 4].map((n) => {
                const optKey = `option${n}`;
                return (
                  <label key={optKey} className='singleoption'>
                    <input
                      type='radio'
                      name={`question-${currentIndex}`}
                      value={optKey}
                      checked={answers[currentIndex] === optKey}
                      onChange={handleOptionChange}
                      className='rdbtn'
                    />
                    {currentQuestion[optKey]}
                  </label>
                );
              })}
            </form>
          </div>

          <div className='btnbar'>
            <button
              onClick={goPrevious}
              disabled={currentIndex === 0}
              className={`btns ${currentIndex === 0
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
            >
              Previous
            </button>

            {currentIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className='btnsub'
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={goNext}
                className='btns'
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <div className='score'>
          <h2 className='quizcom'>Quiz completed! </h2>
          <img className='imm' src={tropy} alt="" />
          <p className='quizcom'>
            You scored <span className='font-bold'>{getScore()} out of {questions.length}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Student;
