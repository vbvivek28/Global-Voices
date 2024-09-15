import React from "react";
import { useState,useEffect } from "react";
import {Container, Card, CardBody, CardTitle,CardText } from "reactstrap";
import axios from 'axios';
const Home = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      
      axios.get('http://localhost:3001/api/showBlogs') 
        
        .then((res) => setBlogs(res.data.documents))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
       
console.log("blogs",blogs)

  return (
    blogs.map((item,index)=>(<> 
    <Container key={index}>
      <Card className="text-center" style={{ margin: 5 , borderRadius: 30 }} >
        <CardBody>
          <CardTitle>
           <h3>{item.blogtitle}</h3>
          </CardTitle>
          <CardText>
           <p>{item.blogcontent}</p>
          </CardText>
        </CardBody>
      </Card>
    </Container></>)
   
  ));
 
}
export default Home;
