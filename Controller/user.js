const UserSchema = require("../Schema/User");
const StudentSchema = require("../Schema/Student");
const Student = require("../Schema/Student");

module.exports = {
    registerStudent: async (req, res) => {
        try {
            const { name, email, phone, address, rollNo, stuClass, section } = req.body;

            const user = await UserSchema.create({name, email, phone, address});

            const student = await StudentSchema.create({rollNo, stuClass, section, userId: user._id});
            
            return res.json({success: 'true', message: 'Student registered successfully!', student: student, user: user});
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    },

    getStudentList: async (req, res) => {
        try {
            const students = await StudentSchema.find({}).populate('userId');
            return res.json(students);

        } catch (error) {
            console.log('error', error);
            throw error;
        }
    },

    updateStudent: async (req, res) => {
        try {
            const {studentId, name, phone, address, stuClass, section} = req.body;

            const student = await StudentSchema.findByIdAndUpdate(studentId, {$set: {stuClass, section}});

            const userId = student.userId;
            const user = await UserSchema.findByIdAndUpdate(userId, {$set: {name, phone, address}});

            return res.json({success: 'true', message: 'User & Student updated successfully!'});

        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}