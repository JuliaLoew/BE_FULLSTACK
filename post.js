import pg from 'pg';
const { Client } = pg;

async function post(req, res) {
    const client = new Client({connectionString:process.env.PG_URI});
    await client.connect();
    const {title, content,cover,author } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO fullstack (title,content,cover,author) VALUES ($1,$2,$3,$4) RETURNING *',
        [title,content,cover,author] 
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
export default post;