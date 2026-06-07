import Enrollment from '../models/enrollment.model.js';

export const createEnrollment = async (req, res) => {
  try {
    const { studentId, courseId, enrollmentDate } = req.body;
    const enrollment = await Enrollment.create({ studentId, courseId, enrollmentDate });
    return res.status(201).json(enrollment);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate('studentId', 'username email')
      .populate('courseId', 'title description');
    return res.status(200).json(enrollments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id)
      .populate('studentId', 'username email')
      .populate('courseId', 'title description');
    if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' });
    return res.status(200).json(enrollment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEnrollment = async (req, res) => {
  try {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' });
    return res.status(200).json({ message: 'Enrollment deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
