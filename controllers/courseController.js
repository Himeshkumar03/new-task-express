import Course from '../models/course.model.js';

export const createCourse = async (req, res) => {
  try {
    const { title, description, fees, duration } = req.body;
    const course = await Course.create({ title, description, fees, duration });
    return res.status(201).json(course);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) return res.status(404).json({ message: 'Course not found' });
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    return res.status(200).json({ message: 'Course deleted' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
