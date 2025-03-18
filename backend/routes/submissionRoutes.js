const express = require('express');
const { createSubmission, getSubmissions } = require('../controllers/submissionController');

const router = express.Router();

// POST: Submit form data
router.post('/submit', createSubmission);

// GET: Retrieve all submissions
router.get('/submissions', getSubmissions);

module.exports = router;
