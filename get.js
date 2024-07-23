import pg from 'pg';
import { Client } from 'pg';

const { Client } = pg; 

async function getAllPosts(req, res) {
    try {
        const result = await Client.query('SELECT * FROM posts');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error fetching posts'});
    }
}

export default getAllPosts;