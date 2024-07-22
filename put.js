import pg from 'pg';
const { Client } = pg;


async function put(req, res) {
    const client = new Client({
        user: 'ahmed',
        password: '12345',
        host: 'localhost',
        port: 5432,
        database: 'test'
    });
    await client.connect();
    const { id } = req.params;
    const { author,title, content,cover,date } = req.body;
    

  try {
    const result = await client.query(
      'UPDATE posts SET author=$1 ,title = $2, content = $3 , cover=$4 ,date= $5 WHERE id = $6 RETURNING *',
      [author,title, content,cover,date, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default put;