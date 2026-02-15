import { useState } from "react";

function FinishPage({ questionBank, userAnswers, resetQuiz }) {
  console.log(questionBank, userAnswers);
  const finalScore = getScore();

  function getScore() {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer == questionBank[index].answer) {
        score++;
      }
    });
    return score;
  }

  return (
    <>
      <h2>You finished the quiz!</h2>
      <h2>
        You scored {finalScore}/{questionBank.length}
      </h2>
      <button className="restart-button" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishPage;
