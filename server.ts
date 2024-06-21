import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

interface Submission {
    name: string;
    email: string;
    phone: string;
    githubLink: string;
    stopwatchTime: string;
}

let submissions: Submission[] = [];

app.get('/submissions', (req, res) => {
    res.json(submissions);
});

app.post('/submissions', (req, res) => {
    const submission: Submission = req.body;
    submissions.push(submission);
    res.status(201).send('Submission added');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
