import express from 'express';
import Student from '../models/Student.js';
import QRCode from 'qrcode';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, studentId, class: studentClass } = req.body;
  try {
    const qrLink = `https://yourdomain.com/scan/${studentId}`;
    const qrImage = await QRCode.toDataURL(qrLink);
    const newStudent = new Student({ name, studentId, class: studentClass, qrCode: qrImage });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(500).json({ error: 'Gagal daftar murid.' });
  }
});

export default router;
