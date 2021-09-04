import express from 'express';
import data from './data.js';


const app = express ();


app.get('/api/projects', (req, res) => {
    res.send(data.projects);
})

app.get('/', (req, res) =>
{
    res.send('Server is ready. Up n runnin');
});
const port=process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});