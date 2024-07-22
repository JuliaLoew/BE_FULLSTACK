import express from 'express';
import pg from 'pg';
const { Client } = pg;
import cors from 'cors';


import delete.js from './delete.js';
import get.js from './get.js';
import post.js from './post.js';
import put.js from './put.js';
import getid.js from './geitid.js';

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello, World!'));
app.listen(port, () => { console.log(`Server is running on port ${port}`)});
