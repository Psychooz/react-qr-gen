import React from 'react'
import QRCode from 'react-qr-code'
import DownloadQrBtn from './DownloadQrBtn';

function QrCodeDisplay(props) {
  return (
    <div className="mt-6 text-center">
      <div className="bg-gray p-4 rounded-lg shadow-md inline-block">
        <QRCode id="qr-code" value={props.qrtext} />
      </div>
      <DownloadQrBtn />
    </div>
  );
}

export default QrCodeDisplay