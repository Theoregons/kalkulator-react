import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Button from './components/Buttons';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-1/4">
        <input type="text" className="w-full h-16 text-right text-2xl border border-gray-300 rounded-lg mb-4 p-2" value={input} readOnly />
        <div className="grid grid-cols-4 gap-2">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((item) => (
            <Button key={item} label={item} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );  
}

export default App
