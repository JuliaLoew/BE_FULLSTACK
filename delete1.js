// import pg from 'pg';
// const { Client } = pg;


// delete.delete('/posts/:id', (req, res) => {
//     const id = req.params.id; 
//     try {
//         const result = await pool.query('DELETE FROM items WHERE id = $1', [id]);
    
//         if (result.rowCount === 0) {
//           return res.status(404).json({ message: 'Item not found' });
//         }
    
//         res.status(200).json({ message: 'Item deleted successfully' });
//       } catch (error) {
//         console.error('Error deleting item:', error);
//         res.status(500).json({ message: 'Internal server error' });
//       }
//     });

// export default delete1;