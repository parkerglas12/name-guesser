import { calcAccuracy, calcTrueAccuracy } from "../util/Helpers.js";

function Stats({ score, numCorrect, numAnswered, totalPoints }) {
  return (
    <section className="grid-container stats-container">
      <h1 className="heading text-center">YOUR STATS</h1>
      <div className="grid-item">
        <h2 className="text-center text-lg">Total Points: {score}</h2>
        <p className="text-sm">
          This is the total number of points that you've earned in your current
          10-question round.
        </p>
      </div>
      <div className="grid-item">
        <h2 className="text-center text-lg">
          Questions: {numCorrect}/{numAnswered}
        </h2>
        <p className="text-sm">
          This is the ratio of how many questions you've gotten correct versus
          how many you've answered during your current round.
        </p>
      </div>
      <div className="grid-item">
        <h2 className="text-center text-lg">
          Accuracy: {calcAccuracy(numCorrect, numAnswered)}%
        </h2>
        <p className="text-sm">
          This is the percentage of your Questions ratio, so what percentage of
          questions you've answered correctly this round.
        </p>
      </div>
      <div className="grid-item">
        <h2 className="text-center text-lg">
          True Accuracy: {calcTrueAccuracy(score, numAnswered, totalPoints)}%
        </h2>
        <p className="text-sm">
          This is the percentage of points you've earned compared to the total
          points that you could've won by answering the questions in perfect
          time.
        </p>
      </div>
    </section>
  );
}

export default Stats;
