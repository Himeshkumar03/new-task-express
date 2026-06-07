import mongoose from 'mongoose';


const studentSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: [true, 'Student with this username already exists']
    },

    email: {
        type: String,
        required: true,
        unique: [true, 'Student with this email already exists']
    },  

    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    }

}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

export default Student;