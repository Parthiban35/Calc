import React, { useState } from 'react';
import './Style.css';

export default function Calculator() {
  const [display, setDisplay] = useState('0');

  const appendDigit = (d) => {
    setDisplay(prev => prev === '0' ? d : prev + d);
  };

  const clearAll = () => setDisplay('0');
  const del = () => setDisplay(prev => prev.length > 1 ? prev.slice(0,-1) : '0');

  const evaluateExp = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay('Error');
    }
  };

  const buttons = [
    ['0', '.', '/', '*'],
    ['7','8','9','-'],
    ['4','5','6','+'],
    ['1','2','3','='],
    ['c','DEL']
  ];

  const handleClick = (val) => {
    if(val === 'C') clearAll();
    else if(val === 'DEL') del();
    else if(val === '=') evaluateExp();
    else appendDigit(val);
  }

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.flat().map(b => (
          <button key={b} onClick={() => handleClick(b)}>{b}</button>
        ))}
      </div>
    </div>
  )
}
