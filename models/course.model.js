import mongoose from 'mongoose';


const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        // unique: [true, 'Student with this username already exists']
    },

    description: {
        type: String,
        required: true,
        // unique: [true, 'Student with this email already exists']
    },  

    fees: {
        type: Number,
        required: true,
        min: [0, 'Fees cannot be negative']
    },

    duration: {
        type: String,
        required: true,
    }

}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;