import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = () => {
    return parts.reduce((partialSum, a) => partialSum + a.exercises, 0);
  };

  return (
    <p>
      <b>Number of exercises {totalExercises()}</b>
    </p>
  );
};

export default Total;
