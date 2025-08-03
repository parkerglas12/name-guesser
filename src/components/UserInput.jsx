function UserInput({
  onChange,
  onKeyDown,
  contents,
  curValue,
  gameActive,
  handleGameActive,
}) {
  return (
    <div className="input-container">
      {gameActive ? (
        <>
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
          <div className="input-content flex-center text-sm">
            <h2>#{contents.question}</h2>
            <h2>{contents.difficulty}</h2>
          </div>
        </>
      ) : (
        <button
          className="next-btn outline-none text-lg"
          onClick={handleGameActive}
        >
          Next Question
        </button>
      )}
    </div>
  );
}

export default UserInput;
