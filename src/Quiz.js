import React, { useState, useEffect } from "react";
import questions from "./questions";
import "./App.css"; // Import your component styles

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(60); // Set initial timer value in seconds

  useEffect(() => {
    let countdown;
    if (!isQuizCompleted && timer > 0) {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && !isQuizCompleted) {
      setIsQuizCompleted(true);
    }

    // Clean up the interval on component unmount or when quiz is completed
    return () => clearInterval(countdown);
  }, [timer, isQuizCompleted]);

  const handleAnswerClick = (selectedOption) => {
    if (isQuizCompleted) {
      // Quiz is completed, do nothing
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz is completed
      setIsQuizCompleted(true);
    }
  };

  const renderOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options.map((option, index) => (
      <div
        key={index}
        className={`option ${isQuizCompleted ? "disabled" : ""}`}
        onClick={() => handleAnswerClick(option)}
      >
        {option}
      </div>
    ));
  };

  return (
    <div className="quiz-container">
      {isQuizCompleted ? (
        <div className="score-container">
          <h2>{timer === 0 ? "Time's Up!" : "Quiz Completed!"}</h2>
          <p>Your Score: {score} out of {questions.length}</p>
        </div>
      ) : (
        <>
          <div className="timer">Time Left: {timer} seconds</div>
          <div className="question-container">
            <h2>Question {questions[currentQuestionIndex].id}</h2>
            <p className="question-text">
              {questions[currentQuestionIndex].question}
            </p>
            <div className="options-container">{renderOptions()}</div>
          </div>
          <button
            className="submit-button"
            onClick={() => setIsQuizCompleted(true)}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
