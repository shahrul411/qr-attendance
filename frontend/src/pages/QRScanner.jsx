import { useState } from 'react';
import QrReader from 'react-qr-reader';
import axios from 'axios';
import SuccessIndicator from '../components/SuccessIndicator';

export default function QRScanner() {
  const [showSuccess, setShowSuccess] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleScan = async data => {
    if (data) {
      const studentId = data.split('/').pop();
      try {
        await axios.post(`${BASE_URL}/api/attendance/${studentId}`);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } catch {
        alert('Kehadiran telah direkod.');
      }
    }
  };

  return (
    <div>
      <h2>Imbas Kod QR</h2>
      <QrReader delay={300} onError={console.error} onScan={handleScan} />
      {showSuccess && <SuccessIndicator />}
    </div>
  );
}
