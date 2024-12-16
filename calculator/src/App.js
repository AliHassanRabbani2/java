import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const n1 = parseInt(num1) || 0;
    const n2 = parseInt(num2) || 0;
    setResult(n1 + n2);
  };
         
  const handleSubtraction = ()=>{
    const n1 = parseInt(num1) || 0 ; 
    const n2 = parseInt(num2) || 0 ;
    setResult(n1-n2)
  };
      const handleMultiply = ()=>{
        const n1 = parseInt(num1) || 0 ; 
        const n2 = parseInt(num2) || 0 ;
        setResult(n1*n2)
      };

      const handleDivide = ()=>{
        const n1 = parseInt(num1) || 0 ; 
        const n2 = parseInt(num2) || 0 ;
        setResult(n1/n2)

      }
  

  return (
    <div>
      <input 
        type="text" 
        placeholder="first num" 
        value={num1}
        onChange={(e) => setNum1(e.target.value)} 
      />
      <br /><br />
      <input 
        type="text" 
        placeholder="second num" 
        value={num2}
        onChange={(e) => setNum2(e.target.value)} 
      />
      <br /><br />
      <button type="button" onClick={handleAddition}>
        Addition
      </button>
      <button type="button" onClick={handleSubtraction}>
        Subtraction
      </button>
      <button type="button" onClick={handleMultiply}>
        Multiply
      </button>

         <button type="button" onClick={handleDivide}>
        Divide
      </button>
      <p id="demo">{result !== null ? `Result: ${result}` : ''}</p>
    </div>
  );
}

export default App;
