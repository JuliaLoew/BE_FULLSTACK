import pg from 'pg';
const { Client } = pg;

async function deletePost(req, res) {
    const client = new Client({connectionString:process.env.PG_URI});
    await client.connect();
    const {id} = req.params;
    try{
            client.query('DELETE FROM fullstack WHERE id = $1', [id],);
            res.status(200).json({status :'file deleted successfully'});
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    };
export default deletePost;