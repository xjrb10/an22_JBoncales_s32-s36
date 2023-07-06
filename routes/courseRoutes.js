const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControllers')

router.post('/checkCourse', (req, res) => {
    courseController.checkCourseExists(req.body)
        .then(resultFromController => res.send(resultFromController))
        .catch(error => {
            console.error('Error checking email:', error);
            res.status(500).send('An error occurred while checking the email.');
        });
});

module.exports = router;