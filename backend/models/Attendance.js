import mongoose from 'mongoose';

const AttendanceSchema = new mongoose.Schema({
  studentId: String,
  date: Date,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Attendance', AttendanceSchema);
