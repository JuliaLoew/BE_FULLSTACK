async function getPostsbyId (req, res) {
    const {id} = req.params;
    try {
        const result = await client.query('SELECT * FROM posts WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({error: 'Post not found'});
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
}

export default getPostsbyId;