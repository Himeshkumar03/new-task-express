import Student from '../models/student.model.js';
import { hashPassword, comparePassword } from '../lib/password.js';

export const registerStudent = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);
    const student = await Student.create({ username, email, password: hashedPassword });
    return res.status(201).json({
        message: 'Student registered successfully',
      id: student._id,
      username: student.username,
      email: student.email,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student) return res.status(401).json({ message: 'Invalid credentials' });

    const validPassword = await comparePassword(password, student.password);
    if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });

    return res.status(200).json({ message: 'Login successful', studentId: student._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().select('-password');
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select('-password');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    return res.status(200).json(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
