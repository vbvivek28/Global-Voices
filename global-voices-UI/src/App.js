import "./App.css";
import React from "react";
import Home from "./components/Home";
import Nav from "./components/nav";
import Header from "./components/Header";

import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";

function App() {
  return ( 
     <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Nav />
            </Col>
            <Col md={8}>
              <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/AddBlog" element={<Blog />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
    </Router>
  );
}

export default App;
