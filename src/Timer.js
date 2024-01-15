import React, { useEffect } from "react";
import "./App.css";

const Timer = ({ timeLeft, setTimeLeft }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, setTimeLeft]);

  return <div className="timer">Time Left: {timeLeft} seconds</div>;
};

export default Timer;
