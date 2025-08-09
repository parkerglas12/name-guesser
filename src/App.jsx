import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { getGameContents, getInfoMap } from "./util/GameData.js";
import { getDiffLevel } from "./util/Helpers.js";
import ReactGA from "react-ga4";
import usePageTracking from "./util/UsePageTracking.js";

import Home from "./pages/Home.jsx";
import HowTo from "./pages/HowTo.jsx";
import Stats from "./pages/Stats.jsx";
import Contact from "./pages/Contact.jsx";
import Modal from "./components/Modal.jsx";
import Navbar from "./components/Navbar.jsx";
import Example from "./components/Example.jsx";

function App() {
  const [initialStart, setInitialStart] = useState(false);
  const [exampleNum, setExampleNum] = useState(1);
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

  // ANALYTICS
  const isProd = window.location.hostname !== "localhost";
  useEffect(() => {
    if (isProd) {
      ReactGA.initialize("G-F1M68Q3FCK");
    }
  }, []);
  usePageTracking();

  useEffect(() => {
    if (gameActive && initialStart) {
      const interval = setInterval(() => {
        setPoints((prevPoints) =>
          prevPoints > 10 ? prevPoints - 1 : prevPoints
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameActive, initialStart]);

  function handleStart() {
    setInitialStart(true);
  }

  function changeExampleNum() {
    setExampleNum((prev) => prev + 1);
  }

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setGameActive(false);
      setTotalPoints((prev) => prev + 50 * diffLevel);
      if (userInput.trim().toLowerCase() === contents.answer) {
        setScore((prevScore) => prevScore + points);
        setNumCorrect((prevCorrect) => prevCorrect + 1);
        setModalType("correct");
      } else {
        setModalType("incorrect");
      }
      setNumAnswered((prevAnswered) => {
        const updated = prevAnswered + 1;
        const newDiff = getDiffLevel(updated);
        setDiffLevel(newDiff);
        setPoints(50 * newDiff);
        if (updated === 10) {
          setModalType("end");
          setModal(true);
        } else {
          nextQuestion(modalType);
        }
        return updated;
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
      setModal(false);
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
      <Navbar main={location.pathname === "/" && initialStart === true} />
      <Modal
        score={score}
        display={modal}
        type={modalType}
        closeModal={closeModal}
      />
      {initialStart ? (
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
      ) : !modal ? (
        <Example
          handleStart={handleStart}
          exampleNum={exampleNum}
          changeExampleNum={changeExampleNum}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
