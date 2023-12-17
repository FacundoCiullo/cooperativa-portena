import Container from 'react-bootstrap/Container';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './NavBar.scss';


const NavBar = () => {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar 
          key={expand} 
          bg="light" 
          variant="light" 
          expand={expand} 
          className="mb-3"
          fixed="top"
        >
          <Container className='navbar'>
            <Navbar.Brand href="/">
              <img
                src="/images/logo-principal.png"
                width="100"
                height="50"
                className="d-inline-block align-top logo"
                alt="logo de la cooperativa la porteña"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className='Navbar' id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink className="nav-link" aria-current="page" to={"/"}>Inicio</NavLink>
                <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Argentina"}>Viviendas en Argentina</NavLink>
                <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Brasil"}>Viviendas en Brasil</NavLink>
                <NavLink className="nav-link" aria-current="page" to={"/Obras"}>Obras</NavLink>
                {/*  <NavLink className="nav-link" aria-current="page" to={"/Creditos"}>Creditos</NavLink>
                <NavLink className="nav-link" aria-current="page" to={"/Nosotros"}>Servicios al asociado</NavLink>  */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
