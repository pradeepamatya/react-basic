import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarText
} from 'reactstrap';

import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  state = {
    isOpen:false
  }

  toggle = () => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">React Basics</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/posts"> <NavLink>Posts</NavLink> </Link>
              </NavItem> 
              <NavItem>
                <Link to="/users"> <NavLink>Users</NavLink> </Link>
              </NavItem>
            </Nav>
            <NavbarText>Logout</NavbarText>
          </Collapse>
        </div>
        </Navbar>
    );
  }
}

export default NavBar;