import React from 'react';

// inisialisasi props functionnya 
const Button = ({ label, onClick }) => {
  return (
    // membuat button onclick yang bisa dipanggil dari child ke parentnya ketika ditekan
    <button className="flex items-center justify-center w-full h-16 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300" onClick={() => onClick(label)}>
      {/* menampilkan nama label yang dikirim dari hasil mapping an parent nya  */}
      {label}
    </button>
  );
};

export default Button;
