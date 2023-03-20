import React from 'react';
import Card from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map( person =>  <Card key={person.cedula} person={person} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;
