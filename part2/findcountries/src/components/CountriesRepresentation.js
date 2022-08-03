import React from 'react';
import CountryDetail from './CountryDetail';
import CountriesList from './CountriesList';

const CountriesRepresentation = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  } else if (10 > countries.length && countries.length > 1) {
    return <CountriesList countries={countries} />;
  } else if (countries.length === 1) {
    return <CountryDetail country={countries[0]} />;
  } else {
    return <p>Mal</p>;
  }
};

export default CountriesRepresentation;
