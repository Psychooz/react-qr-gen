import React, { useState } from 'react';
import QrCodeDisplay from './QrCodeDisplay';

function QRCodeGenerator(){
  const [qrtext, setQrtext] = useState('');
  return (
    <div className="bg-gray shadow-lg p-6 rounded-lg max-w-md w-full">
      <input
        type="text"
        placeholder="Enter your link or text"
        value={qrtext}
        className="w-full p-3 mb-3 border border-gray-500 rounded-lg bg-dark text-white focus:outline-none focus:ring-2 focus:ring-purple"
        onChange={(e) => {
          setQrtext(e.target.value);
        }}
      />
      {qrtext && (
        <>
          <h3>Generated QR Code for:</h3>
          <p className="mt-4 text-sm text-gray-300 break-words">{qrtext}</p>
          <QrCodeDisplay qrtext={qrtext} />
        </>
      )}
    </div>
  );
}

export default QRCodeGenerator;
