import React from 'react';

const Filter = ({ filter, handleFilterChange }) => (
  <p>
    Filter shown with
    <input value={filter} onChange={handleFilterChange} />
  </p>
);

export default Filter;
