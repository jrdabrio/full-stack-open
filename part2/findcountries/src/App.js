import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesRepresentation from './components/CountriesRepresentation';

function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => setFilter(event.target.value);

  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data));
  }, []);

  if (countries.length > 10)
    return (
      <div>
        <p>
          Find countries <input value={filter} onChange={handleFilterChange} />
        </p>
        <CountriesRepresentation countries={filteredCountries} />
      </div>
    );
}

export default App;
