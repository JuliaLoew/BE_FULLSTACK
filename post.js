import pg from 'pg';
const { Client } = pg;

async function post(req, res) {
    const time= new Date();
    const timestamp=`${time.getFullYear()}-${time.getMonth()}-${time.getDate()} // ${time.getHours()}:${time.getMinutes()}`;
   
    const client = new Client({
      connectionString: process.env.PG_URI });

    await client.connect();
    const {title, content,cover,data,author } = req.body;

  try {
    const result = await client.query(
      'INSERT INTO fullstack (id,title,content,cover,data,author) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
        [id,title,content,cover,data,author] 
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
export default post;