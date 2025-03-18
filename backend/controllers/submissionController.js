const Submission = require('../models/Submission');

// POST: Create a new submission
const sanitizeHtml = require('sanitize-html');
const createSubmission = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const sanitizedMessage = sanitizeHtml(message);

        const submission = new Submission({ name, email, message: sanitizedMessage });
        await submission.save();

        res.status(201).json({ message: 'Submission saved successfully', submission });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};




// GET: Retrieve all submissions
const getSubmissions = async (req, res) => {
    try {
        const submissions = await Submission.find();
        res.status(200).json(submissions);
    } catch (error) {
        console.error('Error retrieving submissions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createSubmission, getSubmissions };
