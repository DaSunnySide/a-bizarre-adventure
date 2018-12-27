import React from 'react';

export default function ChoiceButton({ onClick, buttonText = '' }) {
  return (
    <div className="ChoiceButton">
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
}
