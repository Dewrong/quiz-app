import "./index.css";
import Quiz from "./components/quiz";
import questionBank from "./assets/questionBank.json";

function App() {
  return (
    <div className="app-container">
      <h1>Bird Quiz</h1>
      <Quiz questionBank={questionBank} />
    </div>
  );
}

export default App;
