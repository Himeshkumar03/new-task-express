import express from 'express';
import {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  deleteEnrollment,
} from '../controllers/enrollmentController.js';

const router = express.Router();

router.post('/', createEnrollment);
router.get('/', getEnrollments);
router.get('/:id', getEnrollmentById);
router.delete('/:id', deleteEnrollment);

export default router;
