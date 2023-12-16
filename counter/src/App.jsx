import React from 'react';
import './App.css';


function myComponent() {
  const [color, setColor] = React.useState('black');
  
  return (
    <div >
      <p style={{color: color}}>Hello World!</p>
      <button onClick={() => setColor('red')}>
        Change Color
      </button>
    </div>
  );
}


export default myComponent;