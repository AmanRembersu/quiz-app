import React from "react";
import "./App.css";

const Question = ({ question, handleAnswer }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
