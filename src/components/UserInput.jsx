function UserInput({
  onChange,
  onKeyDown,
  time,
  contents,
  curValue,
  gameActive,
  answerQuestion,
  handleGameActive,
}) {
  return (
    <div className="input-container flex-center">
      {gameActive ? (
        <>
          <div>
            <input
              className="main-input outline-none text-center text-lg"
              onChange={onChange}
              onKeyDown={onKeyDown}
              autoFocus
              type="text"
              maxLength="50"
              value={curValue}
              name="main-input"
              autoComplete="off"
            ></input>
            <button
              className="next-btn submit-btn outline-none text-med black"
              onClick={answerQuestion}
            >
              Submit
            </button>
          </div>
          <div className="input-content flex-center text-sm">
            <h2>
              Time: <span className="red">{30 - time}</span>
            </h2>
            <h2>#{contents.question}</h2>
            <h2>{contents.difficulty}</h2>
          </div>
        </>
      ) : (
        <button
          className="next-btn outline-none text-lg black"
          onClick={handleGameActive}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default UserInput;
