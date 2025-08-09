import { motion, AnimatePresence } from "framer-motion";
import { getModalColor, getModalWidth, dropIn } from "../util/Helpers.js";

function Modal({ score, display, type, closeModal }) {
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
                <span className="close text-lg" onClick={closeModal}>
                  &times;
                </span>
                <h2 className="heading">
                  Can you guess the famous person from just two photos?
                </h2>
              </>
            ) : type === "end" ? (
              <>
                <p className="text-lg">FINAL SCORE: {score}</p>
                <button
                  className="modal-btn outline-none text-med black"
                  onClick={closeModal}
                >
                  PLAY AGAIN!
                </button>
              </>
            ) : type === "correct" ? (
              <h2 className="text-lg">CORRECT!</h2>
            ) : (
              <h2 className="text-lg">INCORRECT!</h2>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
