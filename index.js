import express from 'express';
import pg from 'pg';
const { Client } = pg;
import cors from 'cors';



import post from './post.js';
import put from './put.js';
import getAllPosts from './get.js';
import getPostsbyId from './getid.js';
import deletePost from './delete1.js';
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;


app.get('/', (req, res) => getAllPosts(req, res));
app.get('/posts/:id', (req, res) => getPostsbyId(req, res));
app.post('/posts', (req,res)=>post(req, res));
app.put('/posts/:id',(req,res)=> put(req, res));
app.delete('/posts/:id',(req,res)=> deletePost(req, res));
app.listen(port, () => { console.log(`Server is running on port ${port}`)});
