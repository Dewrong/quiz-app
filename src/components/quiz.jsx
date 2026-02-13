import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question: "What is the heaviest bird currently alive?",
      options: ["Common Ostritch", "Cassowary", "Emu", "Andean Condor"],
      answer: "Common Ostritch",
    },
    {
      question: "What currently alive bird has the largest wingspan?",
      options: [
        "Common Ostritch",
        "Wandering Albatross",
        "Great White Pelican",
        "Andean Condor",
      ],
      answer: "Wandering Albatross",
    },
    {
      question: "What currently alive bird has the fastest dive speed?",
      options: [
        "Perigrine Falcon",
        "Golden Eagle",
        "Frigatebird",
        "Anna’s Hummingbird",
      ],
      answer: "Perigrine Falcon",
    },
  ];
  const initialAnswers = [null, null, null];

  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const selectedAnswer = userAnswers[currentQuestion]; // null, option

  function goToNext() {
    if (currentQuestion < 2) setCurrentQuestion(currentQuestion + 1);
  }
  function goToPrev() {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  }

  return (
    <>
      <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question">{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
          <button
            className={
              "option" + (selectedAnswer === option ? " selected" : "")
            }
            key={currentQuestion + option}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </button>
        ))}
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
