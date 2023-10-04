import express from 'express';
import Blog from '../models/BlogModel.js'; // Adjust the path to your Blog model

// Create an Express Router
const router = express.Router();

// Define the InsertBlog function as a route handler
router.post('/api/addBlog', async (req, res) => {
    try {     

      console.log("post api blog");
      // Get the data from the request body
      console.log(req.body);
      const { bloghead:blogtitle, blogvalue :blogcontent} = req.body;

      console.log(blogtitle);
      console.log(blogcontent);
  
      // Create a new blog entry
      const newBlog = new Blog({
        blogtitle,
        blogcontent,
      }
     );
  
      // Save the blog entry to the database
      const savedBlog = await newBlog.save().then((savedBlog) => {
        console.log("Blog saved successfully:", savedBlog);
      })
      console.log(savedBlog);
    }
    catch(error) {
        console.error("Error saving the blog entry:", error);
      };

      
  
    //   console.log(res.status());
    //   // Respond with a success message and the saved blog entry
    //   res.status(201).json({ message: 'Blog entry created successfully', blog: savedBlog });
    // } catch (error) {
    //   // Handle errors
    //   console.error(error);
    //   res.status(500).json({ message: 'Server error' });
    // }
  });
  
  // Export the router to use in your Express app
 export default router;