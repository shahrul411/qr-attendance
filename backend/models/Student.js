import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  class: String,
  qrCode: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Student', StudentSchema);
