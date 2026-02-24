import { useState } from "react";

function FinishPage({ questionBank, userAnswers, resetQuiz }) {
  const finalScore = getScore();
  const [showAnswers, setShowAnswers] = useState(false);

  function getScore() {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      //Case-insensitive
      if (questionBank[index]?.caseSensitive == false) {
        if (
          answer.toLowerCase() == questionBank[index].answer.toLowerCase() &&
          questionBank[index]?.caseSensitive == false
        ) {
          score++;
        }
        if (questionBank[index]?.variants?.includes(answer.toLowerCase())) {
          score = score + 0.5;
        }
      }
      //Case-sensitive
      if (answer == questionBank[index].answer) {
        score++;
      }
      if (questionBank[index]?.variants?.includes(answer)) {
        score = score + 0.5;
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
            answer == questionBank[index].answer ? (
              <div className="answer-correct">
                For Question {index + 1}, "{questionBank[index].question}"{" "}
                <br />
                You chose: "{answer}" Correct answer: "
                {questionBank[index].answer}"
              </div>
            ) : questionBank[index]?.variants?.includes(answer) ? (
              <div className="answer-partial">
                For Question {index + 1}, "{questionBank[index].question}"{" "}
                <br />
                You were close: "{answer}" Correct answer: "
                {questionBank[index].answer}"
              </div>
            ) : (
              <div className="answer-incorrect">
                For Question {index + 1}, "{questionBank[index].question}"{" "}
                <br />
                You chose: "{answer}" Correct answer: "
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
