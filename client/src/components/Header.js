import React from 'react';
import {Card,CardBody}  from 'reactstrap';


const Header = () =>{

    return(
        <div>
            <Card className=' bg-warning'>
                <CardBody>
                <h3 className="text-center my-2">Welcome to Blog Application</h3>
                </CardBody>
            </Card> 
        </div>
    )
}
export default Header;