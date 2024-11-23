import React from 'react'
import { toPng } from 'html-to-image'

function DownloadQrBtn() {
    
    function handleDownload() {
        const qrcode = document.getElementById('qr-code');
        toPng(qrcode).then((dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'qrcode.png';
            link.click();
        }).catch((error) => console.error(error));
    };

  return <button 
    className="mt-4 bg-purple text-white py-2 px-4 rounded-lg shadow hover:brightness-90 transition"
    onClick={handleDownload}
        >
            Download QR Code
    </button>;
}

export default DownloadQrBtn