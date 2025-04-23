import express from 'express';
import Attendance from '../models/Attendance.js';

const router = express.Router();

router.post('/:studentId', async (req, res) => {
  const { studentId } = req.params;
  const today = new Date().toISOString().slice(0, 10);
  const existing = await Attendance.findOne({ studentId, date: new Date(today) });

  if (existing) {
    return res.status(409).json({ message: 'Kehadiran telah direkod hari ini.' });
  }

  const attendance = new Attendance({ studentId, date: new Date(today) });
  await attendance.save();
  res.status(200).json({ message: 'Kehadiran berjaya direkod!' });
});

export default router;
