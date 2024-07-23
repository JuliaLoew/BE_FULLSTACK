import pg from 'pg';
const { Client } = pg;


async function put(req, res) {
    const client = new Client({connectionString:process.env.PG_URI});
    await client.connect();
    const { id } = req.params;
    const { title, content,cover,author } = req.body;
    

  try {
    const result = await client.query(
      'UPDATE fullstack SET title = $1 ,content = $2 , cover=$3 ,author=$4  WHERE id = $5 RETURNING *',
      [title, content,cover,author ,id]
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