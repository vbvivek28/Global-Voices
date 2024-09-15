import React from 'react';
import { useState } from 'react';
import {Container,Form,FormGroup,Input,Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const AddBlog = () =>{
   
   const navigate = useNavigate();
  
   const[blogdata,setBlogdata]=useState({bloghead:"",blogvalue:""})
   
  const onBlogchange = (e) => {
  
  setBlogdata((prevData) => ({
    ...prevData,
    [e.target.name]: e.target.value, 
  }))}
  
  console.log(blogdata)
  
  const  submitBlog=async(e)=>{
    e.preventDefault()
   try {
     const response= await axios.post("http://localhost:3001/api/addBlog",blogdata)
     console.log(response);
   
   } catch (error) {
      console.log(error)
   }
       navigate('/AddBlog')
   }
 return(
   <Container>
    <Form>
       <FormGroup>
       <label style={{margin:8}}>Add Your Blog Header</label>
       <Input type="text" value={blogdata.bloghead} onChange={onBlogchange} placeholder="Enter Blog Heading" name="bloghead" id="BlogHead" />
       
       <label style={{margin:8}}>Add Your Blog</label>
       <Input type="textarea"  value={blogdata.blogvalue} onChange={onBlogchange} style={{height:200}} placeholder="Enter here" name="blogvalue" id="Blog" />
       <Button style={{margin:10}} color="primary" outline onClick={submitBlog}>
             Post
            </Button>
       </FormGroup>
    </Form>
    </Container>
 )
}
export default AddBlog;