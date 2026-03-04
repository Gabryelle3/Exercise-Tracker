import React, { useState } from "react";
import "./App.css";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // screen rendering where you can choose
  if (selectedExercise === "pushups") {
    return <RepetitionExercise name="Push Ups" goBack={() => setSelectedExercise(null)} />;
  }

  if (selectedExercise === "squats") {
    return <RepetitionExercise name="Squats" goBack={() => setSelectedExercise(null)} />;
  }

  if (selectedExercise === "running") {
    return <DurationExercise name="Running" goBack={() => setSelectedExercise(null)} />;
  }

  if (selectedExercise === "plank") {
    return <DurationExercise name="Plank" goBack={() => setSelectedExercise(null)} />;
  }

  // default main menu
  return (
    <div>
      <h1>Exercise Tracker</h1>

      <h2>Repetition Exercises</h2>
      <button onClick={() => setSelectedExercise("pushups")}>Push Ups</button>
      <button onClick={() => setSelectedExercise("squats")}>Squats</button>

      <h2>Duration Exercises</h2>
      <button onClick={() => setSelectedExercise("running")}>Running</button>
      <button onClick={() => setSelectedExercise("plank")}>Plank</button>
    </div>
  );
}

export default App;