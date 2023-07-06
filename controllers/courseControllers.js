const Course = require('../models/course');


/*
	Check if the email is already exists
	Steps:
		- use mongoose 'find' method to find duplicate emails
		- use the 'then' method to send a response back to the frontend applicaiton based on the result
*/

module.exports.checkCourseExists = (req) => {
    // the result is sent back to the frontend via the 'then' method found in the route file
    return Course.find({courseId: req.courseId})
        .then(result => {
            console.log(result); // for demonstration purposes

            // the find method returns a record if a match is found
            return Promise.resolve(!!result.length);
        });
};