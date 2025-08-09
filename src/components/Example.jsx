import Photos from "../components/Photos.jsx";

function Example({ handleStart, exampleNum, changeExampleNum }) {
  return (
    <>
      {exampleNum === 1 ? (
        <div className="example-container flex-center black">
          <h2 className="example-heading heading">Welcome To Name Guesser!</h2>
          <p className="text-med">
            Name Guesser is a puzzle game where each question presents you with
            two photos. Hidden within them, through clever symbolism, are clues
            that lead to the name of a famous person. Sometimes the images hint
            at parts of the name itself. Other times, they reference a role, a
            song, or a piece of history tied to that person. Anything is fair
            game — but let’s explore three common types of clues you’ll
            encounter as you play!
          </p>
          <button
            className="next-btn outline-none text-med black"
            onClick={changeExampleNum}
          >
            Continue
          </button>
        </div>
      ) : exampleNum === 2 ? (
        <div className="example-container flex-center black">
          <h2 className="example-heading text-lg">Example Question #1</h2>
          <Photos url1="006.webp" url2="006(2).webp" />
          <p className="text-med">
            One common form of symbolism in the game is when each photo stands
            for part of the person’s name. In this example, the first picture
            shows a dinner roll, and the second shows a jar of jelly. Put them
            together and you get the name Jelly Roll.
          </p>
          <button
            className="next-btn outline-none text-med black"
            onClick={changeExampleNum}
          >
            Continue
          </button>
        </div>
      ) : exampleNum === 3 ? (
        <div className="example-container flex-center black">
          <h2 className="example-heading text-lg">Example Question #2</h2>
          <Photos url1="026.webp" url2="026(2).webp" />
          <p className="text-med">
            Another common form of symbolism in the game connects photos to
            famous roles actors have played or albums/songs musicians have
            written. Here, the sinking ship represents Leonardo DiCaprio's
            iconic role in Titanic, while the flower with the moon hints at his
            part in Killers of the Flower Moon.
          </p>
          <button
            className="next-btn outline-none text-med black"
            onClick={changeExampleNum}
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="example-container flex-center black">
          <h2 className="example-heading text-lg">Example Question #3</h2>
          <Photos url1="024.webp" url2="024(2).webp" />
          <p className="text-med">
            For this final example, we have what I call a “blended” question.
            The first photo shows a strong arm, representing the name
            “Armstrong,” while the second photo is the moon, symbolizing Neil
            Armstrong’s historic first step on the lunar surface. Put together,
            these photos point to Neil Armstrong.
          </p>
          <button
            className="next-btn outline-none text-med black"
            onClick={handleStart}
          >
            Play Now!
          </button>
        </div>
      )}
    </>
  );
}

export default Example;
