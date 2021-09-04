import express from 'express';
import data from './data.js';


const app = express();


app.get('/api/projects/:id', (req, res) => {
    const project = data.projects.find((x) => x._id === req.params.id);
    if (project) {
        res.send(project)
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/api/projects', (req, res) => {
    res.send(data.projects);
});

app.get('/', (req, res) => {
    res.send('Server is ready. Up n runnin');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});