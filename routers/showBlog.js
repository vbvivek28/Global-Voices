import express from 'express';
import BlogModel from '../models/BlogModel.js';


const router = express.Router();


router.get('/api/showBlogs', async (req, res) => {
  

  try {
    const documents = await BlogModel.find()
    console.log('Retrieved data:', documents);
    return res.status(200).json({documents});
  } catch (err) {
    console.error('Error retrieving data:', err);
    return res.status(500).json({ error: 'Error retrieving data' }); 
   }
});

export default router;
