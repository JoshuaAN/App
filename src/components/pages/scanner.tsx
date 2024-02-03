import React, { useEffect, useState } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat, DecodeHintType, IScannerControls } from '@zxing/library';

interface BarcodeScannerProps {
    onSelectionChange: (selectedText: string) => void; // Define a prop for the callback function
}

const BarcodeScanner: React.FC = ({ onSelectionChange }) => {
  const [latestBarcode, setLatestBarcode] = useState<string | null>(null); // Store only the latest barcode
  const [error, setError] = useState<string | null>(null);
  const [scannerControls, setScannerControls] = useState<IScannerControls | undefined>(undefined);

  useEffect(() => {
    const hints = new Map();
    const formats = [BarcodeFormat.EAN_13];
    hints.set(DecodeHintType.POSSIBLE_FORMATS, formats);

    const codeReader = new BrowserMultiFormatReader(hints);
    let selectedDeviceId: string | undefined;

    codeReader.listVideoInputDevices()
      .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
          selectedDeviceId = videoInputDevices[0].deviceId; // Just pick the first camera
          const previewElem = document.getElementById('barcode-scanner-preview') as HTMLVideoElement;
          return codeReader.decodeFromVideoDevice(selectedDeviceId, previewElem, (result, error, controls) => {
            if (result) {
              onSelectionChange(result.getText());
              setLatestBarcode(result.getText()); // Update the state with the latest barcode
            }
            if (error) {
              // console.error(error);
            }
            setScannerControls(controls);
          });
        } else {
          setError('No video input devices found');
        }
      })
      .catch((err) => {
        setError('Error initializing barcode scanner');
        // console.error(err);
      });

    // Cleanup on component unmount
    return () => {
      scannerControls?.stop(); // Stop the scanning if the component is unmounted
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <video id="barcode-scanner-preview" style={{ width: 500 }}></video>
      {/* {error && <div>Error: {error}</div>} */}
      {/* {latestBarcode && <div>{latestBarcode}</div>} */}
    </div>
  );
};

export default BarcodeScanner;
