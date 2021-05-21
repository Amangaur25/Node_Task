const express = require('express');
const Joi = require('joi');
const router = express.Router();

const userController = require('../Controller/user');

router.post('/register-student', async (req, res, next) => {
    try {
        const validation = Joi.object({
            name: Joi.string().required(),
            phone: Joi.number().required(),
            email: Joi.string().email().required(),
            address: Joi.string().required(),
            stuClass: Joi.string().required(),
            rollNo: Joi.string().required(),
            section: Joi.string().required()
        });

        const { error } = validation.validate(req.body);

        if (error) {
        console.log("error", error);
        return res.status(422).json({ message: 'Invalid data!' });
        }

        await userController.registerStudent(req, res);
    } catch (error) {
        console.log("error", error);
        next(error);
      }
});

router.put('/update-student', async (req, res, next) => {
    try {
        const validation = Joi.object({
            studentId: Joi.string().required(),
            name: Joi.string().required(),
            phone: Joi.number().required(),
            address: Joi.string().required(),
            stuClass: Joi.string().required(),
            section: Joi.string().required()
        });

        const { error } = validation.validate(req.body);

        if (error) {
        console.log("error", error);
        return res.status(422).json({ message: 'Invalid data!' });
        }

        await userController.updateStudent(req, res);

    } catch (error) {
        console.log("error", error);
        next(error);
    } 
})

router.get('/student-list', async (req, res, next) => {
    try {
        await userController.getStudentList(req, res);
    } catch (error) {
        console.log("error", error);
        next(error);
    }
})

module.exports = router;