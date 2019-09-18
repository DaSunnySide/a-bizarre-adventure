import React from 'react';
import getFacts from './Facts';
function DisplayUser(props) {
  const facts = props.facts.map((fact, i) => {
    return <li key={i}>{fact.text}</li>
  });
  return (
    <ul>
      {facts}
    </ul>
  );
}

export default DisplayUser;
