import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Anecdote = ({ text, votes }) => (
  <>
    <p>{text}</p>
    <p>has {votes} votes.</p>
  </>
);

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));

  const setRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const vote = () => {
    const auxPoints = [...points];
    auxPoints[selected] += 1;
    setPoints(auxPoints);
  };

  const maxVoted = () => points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={props.anecdotes[selected]} votes={points[selected]} />
      <Button text="Next anecdote" handleClick={setRandomAnecdote} />
      <Button text="Vote" handleClick={vote} />

      <h1>Anecdote with most votes</h1>
      <Anecdote text={props.anecdotes[maxVoted()]} votes={points[maxVoted()]} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const root = createRoot(document.getElementById('root'));
root.render(<App anecdotes={anecdotes} />);
