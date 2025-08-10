import Photos from "../components/Photos.jsx";

function Example({ handleStart, exampleNum, changeExampleNum }) {
  return (
    <>
      {exampleNum === 1 ? (
        <div className="example-container flex-center black">
          <h2 className="example-heading heading">Welcome To Name Guesser!</h2>
          <p className="text-med">
            Name Guesser is a puzzle game where each question shows you two
            photos. Hidden in the photos are clues that point to the name of a
            famous person. These clues could relate to the person's actual name,
            a role they played, a song they composed, or even a historical event
            associated with them. Let’s delve into three of the most common
            types of clues you’ll encounter…
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
          <h2 className="example-heading text-lg">Example #1: Name Parts</h2>
          <Photos url1="006.webp" url2="006(2).webp" />
          <p className="text-med">
            Each photo shows part of the person’s name. Example: The first photo
            shows a dinner roll. The second shows a jar of jelly. Put them
            together and you get: <span className="bold">Jelly Roll</span>.
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
          <h2 className="example-heading text-lg">Example #2: Famous Work</h2>
          <Photos url1="026.webp" url2="026(2).webp" />
          <p className="text-med">
            Each photo hints at roles, songs, or albums. Example: A sinking ship
            stands for <span className="bold">Leonardo DiCaprio’s </span>{" "}
            iconic role in Titanic. A flower with a moon hints at his part in
            Killers of the Flower Moon.
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
          <h2 className="example-heading text-lg">Example #3: Blended Clues</h2>
          <Photos url1="024.webp" url2="024(2).webp" />
          <p className="text-med">
            One photo shows part of the name, and the other connects to
            something the person is known for. Example: A strong arm represents
            the name “Armstrong.” A photo of the moon points to Neil Armstrong’s
            first step on the moon. When put together, you get:{" "}
            <span className="bold">Neil Armstrong</span>.
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
