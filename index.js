import express from 'express';
import pg from 'pg';
const { Client } = pg;
import cors from 'cors';



import post from './post.js';
import put from './put.js';
const app = express();

const posts = [
    {
        id: 1,
        author: 'Post 1',
        title: 'Post 1',
        content : 'Post 1',
        cover: 'Post 1',
        date: "2021-10-10 10-10",
    }
];
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;


app.get('/', (req, res) => res.send('Hello, World!'));
app.post('/posts', (req,res)=>post(req, res));
app.put('/posts/:id',(req,res)=> put(req, res));
app.listen(port, () => { console.log(`Server is running on port ${port}`)});
