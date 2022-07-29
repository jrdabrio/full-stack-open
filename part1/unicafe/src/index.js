import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ text, value, append }) => (
  <tr>
    <td>{text}</td>
    <td>
      {value}
      {append}
    </td>
  </tr>
);

const StatisticList = ({ good, neutral, bad }) => {
  const allVotes = () => {
    return good + neutral + bad;
  };

  const average = () => {
    if (allVotes()) {
      return (
        Math.round(((good - bad) / allVotes() + Number.EPSILON) * 100) / 100
      );
    } else {
      return 0;
    }
  };

  const positivePercentage = () => {
    if (allVotes()) {
      return (
        Math.round(((good * 100) / allVotes() + Number.EPSILON) * 100) / 100
      );
    } else {
      return 0;
    }
  };

  if (allVotes() > 0) {
    return (
      <>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={allVotes()} />
            <Statistic text="Average" value={average()} />
            <Statistic
              text="Positive"
              value={positivePercentage()}
              append="%"
            />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <StatisticList good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
