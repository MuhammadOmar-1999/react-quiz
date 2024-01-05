function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  const isCorrect = (i) => i === question.correctOption;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered ? (isCorrect(i) ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
