import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import projectRouter from './routers/projectRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGOBD_URL || 'mongodb://localhost/jifund', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter);

app.get('/', (req, res) => {
    res.send('Server is ready. Up n runnin');
});

app.use((err, req , res, next) =>{
    res.status(500).send({message: err.message});
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});