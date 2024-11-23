import React from 'react';
import Header from './components/Header';
import QrCodeGenerator from './components/QrCodeGenerator';

function App() {
  return (
    <div className="min-h-screen bg-dark-gradient text-white flex flex-col items-center justify-center">
      <Header />
      <QrCodeGenerator />
    </div>
  );
}

export default App
