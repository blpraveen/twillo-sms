import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Nav, Navbar,NavItem, NavLink } from "reactstrap";
const Layout = () => {
  return (<>
     <Navbar color="primary">
      <Nav>
        <NavItem>
          <NavLink href="/" style={{color:"white"}}> Contacts </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/sent-list" style={{color:"white"}}> Sent Messages </NavLink>
        </NavItem>
      </Nav>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;
