import mongoose from 'mongoose';
import Student from './student.model.js';
import Course from './course.model.js';

const enrollSchema = new mongoose.Schema({

    studentId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Student',
        // required: true,
        unique: [true, 'Enrollment with this student ID already exists']
    },

    courseId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Course',
        // required: true,
        unique: [true, 'Enrollment with this course ID already exists']
    },  

    enrollmentDate: {
        type: Date ,
        required: true,
       
    }

}, { timestamps: true });

const Enrollment = mongoose.model('Enrollment', enrollSchema);

export default Enrollment   ;