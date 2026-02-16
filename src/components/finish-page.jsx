import { useState } from "react";

function FinishPage({ questionBank, userAnswers, resetQuiz }) {
  const finalScore = getScore();
  const [showAnswers, setShowAnswers] = useState(false);

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
      <button
        className="restart-button"
        onClick={() => setShowAnswers(!showAnswers)}
      >
        Reveal Answers
      </button>
      {showAnswers && (
        <div id="answers">
          {userAnswers.map((answer, index) =>
            answer !== questionBank[index].answer ? (
              <div className="answer-incorrect">
                For Question {index + 1}, "{questionBank[index].question}"{" "}
                <br />
                "You chose: "{answer}" Correct answer: "
                {questionBank[index].answer}"
              </div>
            ) : (
              <div className="answer-correct">
                For Question {index + 1}, "{questionBank[index].question}"{" "}
                <br />
                "You chose: "{answer}" Correct answer: "
                {questionBank[index].answer}"
              </div>
            ),
          )}
        </div>
      )}
      <button className="restart-button" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </>
  );
}

export default FinishPage;
