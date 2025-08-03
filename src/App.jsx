import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getGameContents, getInfoMap } from "./util/GameData.js";
import { getDiffLevel } from "./util/Helpers.js";

import Home from "./pages/Home.jsx";
import HowTo from "./pages/HowTo.jsx";
import Stats from "./pages/Stats.jsx";
import Contact from "./pages/Contact.jsx";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [initialStart, setInitialStart] = useState(false);
  const [infoMap, setInfoMap] = useState(getInfoMap());
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(50);
  const [totalPoints, setTotalPoints] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [numAnswered, setNumAnswered] = useState(0);
  const [diffLevel, setDiffLevel] = useState(1);
  const [userInput, setUserInput] = useState("");
  const [contents, setContents] = useState(getGameContents(infoMap, diffLevel));
  const [modal, setModal] = useState(true);
  const [modalType, setModalType] = useState("welcome");
  const location = useLocation();

  useEffect(() => {
    if (gameActive) {
      const interval = setInterval(() => {
        setPoints((prevPoints) => {
          if (prevPoints > 10) {
            prevPoints -= 1;
          }
          return prevPoints;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameActive]);

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setGameActive(false);
      setTotalPoints((prev) => (prev += 50 * diffLevel));
      if (userInput.trim().toLowerCase() === contents.answer) {
        setScore((prevScore) => prevScore + points);
        setNumCorrect((prevCorrect) => prevCorrect + 1);
        setModalType("correct");
      } else {
        setModalType("incorrect");
      }
      setNumAnswered((prevAnswered) => {
        prevAnswered += 1;
        setDiffLevel(getDiffLevel(prevAnswered));
        setPoints(50 * getDiffLevel(prevAnswered));
        if (prevAnswered === 10) {
          setModalType("end");
          setModal(true);
        } else {
          nextQuestion(modalType);
        }
        return prevAnswered;
      });
    }
  }

  function handleGameActive() {
    setGameActive(true);
    const updatedMap = new Map(infoMap);
    updatedMap.delete(contents.question);
    setInfoMap(updatedMap);
    setContents(getGameContents(updatedMap, diffLevel));
  }

  function nextQuestion(type) {
    setUserInput("");
    setModal(true);
    if (type !== "end") {
      setTimeout(() => {
        setModal(false);
      }, 1500);
    }
  }

  function closeModal() {
    setModal(false);
    setGameActive(true);
    if (modalType !== "welcome") {
      resetGame();
    }
    if (modalType === "welcome") {
      setInitialStart(true);
    }
  }

  function resetGame() {
    setUserInput("");
    setModalType("");
    setScore(0);
    setPoints(50);
    setDiffLevel(1);
    setNumCorrect(0);
    setTotalPoints(0);
    setNumAnswered(0);
    setInfoMap(getInfoMap());
    setContents(getGameContents(infoMap, 1));
  }

  return (
    <>
      <Navbar main={location.pathname === "/" ? true : false} />
      <Modal
        score={score}
        display={modal}
        type={modalType}
        closeModal={closeModal}
      />
      {initialStart && (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleChange={handleChange}
                  handleKeyDown={handleKeyDown}
                  contents={contents}
                  userInput={userInput}
                  gameActive={gameActive}
                  handleGameActive={handleGameActive}
                />
              }
            />
            <Route path="/howto" element={<HowTo />} />
            <Route
              path="/stats"
              element={
                <Stats
                  score={score}
                  numCorrect={numCorrect}
                  numAnswered={numAnswered}
                  totalPoints={totalPoints}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
