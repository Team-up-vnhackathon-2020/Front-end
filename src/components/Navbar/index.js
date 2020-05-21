import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Team Up</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Status</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Trending</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Find package</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/request">Send request</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navigation;