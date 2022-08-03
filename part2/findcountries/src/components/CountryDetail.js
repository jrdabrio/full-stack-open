import React from 'react';

const CountryDetail = ({ country }) => (
  <div>
    <h1>{country.name.common}</h1>

    <p>Capital {country.capital[0]}</p>
    <p>Population {country.population}</p>

    <h2>Languages</h2>

    <ul>
      {Object.entries(country.languages).map(([key, value]) => (
        <li key={key}>{value}</li>
      ))}
    </ul>

    <img src={country.flags.svg} alt={country.flag} width="200px" />
  </div>
);

export default CountryDetail;
