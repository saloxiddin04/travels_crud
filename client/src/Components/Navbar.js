import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link} from "react-router-dom";

function Navigation(args) {

    return (
        <div>
            <Navbar className="bg-black">
                <Link className="text-decoration-none me-3 text-white" to="/">Travel</Link>
                <Nav className="me-auto flex" navbar>
                    <NavItem className="flex justify-content-between">
                        <Link className="text-decoration-none text-white" to="/add">Add</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navigation;
