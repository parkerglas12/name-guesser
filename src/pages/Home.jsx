import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Photos from "../components/Photos.jsx";
import UserInput from "../components/UserInput.jsx";

function Home({
  handleChange,
  handleKeyDown,
  contents,
  userInput,
  gameActive,
  answerQuestion,
  handleGameActive,
}) {
  return (
    <div className="game-container flex-center black">
      <Photos url1={contents.imgOne} url2={contents.imgTwo} />
      <UserInput
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        contents={contents}
        curValue={userInput}
        gameActive={gameActive}
        answerQuestion={answerQuestion}
        handleGameActive={handleGameActive}
      />
      <a
        href="https://linkedin.com/in/parker-glas-09145536a"
        target="_blank"
        className="linkedin"
      >
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>{" "}
    </div>
  );
}

export default Home;
