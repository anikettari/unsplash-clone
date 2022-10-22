import React from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/logo.png";
import { VscBell } from "react-icons/vsc";
import profile from "../Images/profile.jpg";

import { AiOutlineSearch } from "react-icons/ai";

const NavbarPage = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav_bar_padding">
        <Navbar.Brand>
          <img className="logo" src={logo}></img>
        </Navbar.Brand>

        <Form className="d-flex nav_relative">
          <Form.Control
            type="search"
            placeholder="Search for high-resolution photos"
            className="me-5 nav_search"
          />
          <div className="search_icon_nav">
            <AiOutlineSearch />
          </div>
        </Form>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav_text">Advertise</Nav.Link>
            <Nav.Link className="nav_text">Blog</Nav.Link>
            <Nav.Link className="nav_text">Unsplash +</Nav.Link>
            <Nav.Link className="nav_text">Submit a photo</Nav.Link>

            <Nav.Link>
              <VscBell />
            </Nav.Link>
            <Nav.Link>
              <img src={profile} className="profile_pic"></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    </div>
  );
};

export default NavbarPage;
