import React from "react";
import Quiz from "./Quiz"; // Import your main Quiz component
import "./App.css"; // Import your CSS file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz Application</h1>
      </header>
      <main>
        <Quiz /> {/* Render your Quiz component here */}
      </main>
    </div>
  );
}

export default App;
