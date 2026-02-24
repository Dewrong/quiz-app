import { useState } from "react";
import FinishPage from "./finish-page";

function Quiz({ questionBank }) {
  let initialAnswersConstruct = [];
  for (let i = 0; i < questionBank.length; i++) {
    initialAnswersConstruct.push(null);
  }

  const initialAnswers = initialAnswersConstruct;

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  const [isQuizCompleted, setQuizCompleted] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion]; // null, option

  function goToNext() {
    if (currentQuestion < questionBank.length - 1)
      setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion == questionBank.length - 1) {
      setQuizCompleted(true);
    }
  }
  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  function resetQuiz() {
    setUserAnswers(initialAnswers);
    setQuizCompleted(false);
    setCurrentQuestion(0);
  }

  function checkForAnswer(selectedAnswer) {
    if (selectedAnswer != null) {
      document.getElementById("text-input").value = selectedAnswer;
    }
  }

  if (isQuizCompleted == true) {
    return (
      <FinishPage
        questionBank={questionBank}
        userAnswers={userAnswers}
        resetQuiz={resetQuiz}
      />
    );
  }

  return (
    <>
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options ? (
          questionBank[currentQuestion].options.map((option) => (
            <button
              className={
                "option" + (selectedAnswer === option ? " selected" : "")
              }
              key={currentQuestion + option}
              onClick={() => handleSelectOption(option)}
            >
              {option}
            </button>
          ))
        ) : (
          <input
            id="text-input"
            type="textbox"
            autoComplete="off"
            onInput={(e) => handleSelectOption(e.target.value)}
            defaultValue={selectedAnswer}
          ></input>
        )}
        <div className="nav-buttons">
          <button onClick={goToPrev} disabled={currentQuestion == 0}>
            Previous
          </button>
          <button onClick={goToNext} disabled={!selectedAnswer}>
            {currentQuestion === questionBank.length - 1
              ? "Finish Quiz"
              : "Next"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Quiz;
