import { useState } from 'react';
import axios from 'axios';

export default function RegisterStudent() {
  const [form, setForm] = useState({ name: '', studentId: '', class: '' });
  const [qr, setQr] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`${BASE_URL}/api/students`, form);
    setQr(res.data.qrCode);
  };

  return (
    <div>
      <h2>Daftar Murid</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nama" onChange={handleChange} required />
        <input name="studentId" placeholder="ID Murid" onChange={handleChange} required />
        <input name="class" placeholder="Kelas" onChange={handleChange} required />
        <button type="submit">Daftar</button>
      </form>
      {qr && <img src={qr} alt="QR Code" />}
    </div>
  );
}
