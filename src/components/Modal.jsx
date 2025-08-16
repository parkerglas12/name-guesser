import { motion, AnimatePresence } from "framer-motion";
import { getModalColor, getModalWidth, dropIn } from "../util/Helpers.js";

function Modal({ score, display, type, closeModal, numCorrect, numAnswered }) {
  return (
    <AnimatePresence>
      {display && (
        <motion.div
          className="modal-container flex-center"
          exit="exit"
          initial="hidden"
          animate="visible"
          variants={dropIn}
        >
          <div
            className={`modal flex-center ${getModalWidth(
              type
            )} ${getModalColor(type)}`}
          >
            {type === "welcome" ? (
              <>
                <h2 className="heading">
                  Can you guess the famous person from just two photos?
                </h2>
                <button
                  className="modal-btn outline-none text-med black"
                  onClick={closeModal}
                >
                  Get Started!
                </button>
              </>
            ) : type === "end" ? (
              <>
                <h2 className="text-lg">Final Score: {score} / 1300</h2>
                <h2 className="text-med">
                  Questions Final Tally: {numCorrect} / {numAnswered}
                </h2>
                <button
                  className="modal-btn outline-none text-med black"
                  onClick={closeModal}
                >
                  Play Again!
                </button>
              </>
            ) : type === "correct" ? (
              <h2 className="text-lg">Correct!</h2>
            ) : (
              <h2 className="text-lg">Incorrect!</h2>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
