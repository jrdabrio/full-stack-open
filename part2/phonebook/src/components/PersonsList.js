import React from 'react';
import Person from './Person';

const PersonsList = ({ shownPersons }) => (
  <ul>
    {shownPersons.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </ul>
);

export default PersonsList;
