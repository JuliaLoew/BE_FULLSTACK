import pg from 'pg';
const { Client } = pg; 

async function getAllPosts(req, res) {
    const client = new Client({connectionString:process.env.PG_URI});
    await client.connect();
    try {
        const result = await client.query('SELECT * FROM fullstack');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error fetching posts'});
    }
}

export default getAllPosts;