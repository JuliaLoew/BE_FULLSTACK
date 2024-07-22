import pg from 'pg';
const { Client } = pg;

async function post(req, res) {
    const time= new Date();
    const timestamp=`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} // ${time.getHours()}:${time.getMinutes()}`;
    const client = new Client({
            user: 'ahmed',
            password: '12345',
            host: 'localhost',
            port: 5432,
            database: 'test'
    });
    await client.connect();
    const { id,author,title, content,cover,date } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO posts (id,author,title,content,cover,date) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
        [id,author,title,content,cover,date] 
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
export default post;