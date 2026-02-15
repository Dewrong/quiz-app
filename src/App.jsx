import "./index.css";
import Quiz from "./components/quiz";
import questionBank from "./assets/questionBank-Ocho.json";

function App() {
  return (
    <div className="app-container">
      <h1>Ocho Quiz</h1>
      <Quiz questionBank={questionBank} />
    </div>
  );
}

export default App;
