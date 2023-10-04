import React from "react";
import { ListGroupItem, ListGroup } from "reactstrap";

import "../App.css"
function Nav() {
  return (
    <ListGroup className="my-2"> 
    <a className="custom-link" href="/" action>
      <ListGroupItem  action >
      view all blog
       </ListGroupItem>
       </a> 
    <a className="custom-link" href="/AddBlog" action>
      <ListGroupItem action>
        add blog
      </ListGroupItem>
      </a> 
    </ListGroup>
  );
}
export default Nav;



