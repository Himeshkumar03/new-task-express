import express from 'express';
import {
  registerStudent,
  loginStudent,
  getStudents,
  getStudentById,
} from '../controllers/studentController.js';

const router = express.Router();

router.post('/register', registerStudent);
router.post('/login', loginStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);

export default router;
