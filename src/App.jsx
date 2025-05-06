import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Button from './components/Buttons';

function App() {

  // variabel untuk menyimpan value tombol yang ditekan
  const [input, setInput] = useState('');

  // fungsi ketika tombol ditekan
  const handleButtonClick = (value) => {
    // jika tombol dengan label C ditekan maka akan menghapus value inputnya
    if (value === 'C') {
      setInput('');
    } 
    // jika tombol "=" ditekan maka akan menjalankan perhitungan matematika
    else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } 
    // jika selain kondisi di atas maka simpan value tombol pada usestatenya
    else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-1/4">
        <input type="text" className="w-full h-16 text-right text-2xl border border-gray-300 rounded-lg mb-4 p-2" value={input} readOnly />
        <div className="grid grid-cols-4 gap-2">
          {/* inisialisasi tombol tombol pada kalkulator kemudian di mapping untuk menjadi button*/}
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '=', 'C'].map((item) => (
            // memanggil component button  dan mengirimkan props ke component buttoon nya
            <Button label={item} onClick={handleButtonClick} />
          ))}
        </div>
      </div>
    </div>
  );  
}

export default App
