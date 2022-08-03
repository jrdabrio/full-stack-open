import React from 'react';

const CountriesList = ({ countries, handleCountryClick }) => (
  <ul>
    {countries.map((country) => (
      <li key={country.name.common}>
        {country.name.common}
        <button onClick={handleCountryClick(country.name.common)}>show</button>
      </li>
    ))}
  </ul>
);

export default CountriesList;
