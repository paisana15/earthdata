import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../assets/logo_transparent.png";
import {
  Link
} from 'react-router-dom';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { facebook } from '@fortawesome/fontawesome-common-types';
// import from '@fortawesome/font'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa } from '@fortawesome/free-solid-svg-icons';


export default function HomePage() {
  return (
    <div className="h-100">
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img className="ml-3 logotype" src={Logo} alt="Earth Data logo" height="65" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Data</Nav.Link>
              <Nav.Link href="#home">Collaborate</Nav.Link>
              <Nav.Link href="#home">Learn</Nav.Link>
              <Nav.Link href="#home">Feedback</Nav.Link>
              <Nav.Link href="#home">
                <i className="fas fa-question-circle"></i>
              </Nav.Link>
              {/* <Nav.Link href="#home">Question Mark</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <section className="first-section">
        <Form className="search-form" inline>
          <FormControl type="text" placeholder="Search datasets" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>

        <div className="card-data">
          <h3 className="color-green p-3 border-bottom mb-0">
            Earth Observation Data
          </h3>
          <div className="data-wrapper">
            <div className="data-list d-flex flex-column p-3">
              <h4 className="mt-2 color-green">
                Sources
              </h4>
              <Link className="list-item" to="/">Landsat-8</Link>
              <Link className="list-item" to="/">Sentinel-2</Link>
              <Link className="list-item" to="/">Use Data</Link>
              <Link className="list-item" to="/">Visualize Data</Link>
              <Link className="list-item" to="/">Adding New Data</Link>
              <Link className="list-item" to="/">Open Data Policies</Link>
            </div>
            <div className="d-flex observation-row p-3">
              <h1 className="color-green">Earth Observation Data</h1>
              <div className="social-wrapper">
                <Link className="list-item" to="/">
                  <i className="fab fa-twitter-square fa-lg ml-2"></i>
                </Link>
                <Link className="list-item" to="/">
                  <i className="fab fa-facebook-square fa-lg ml-2"></i>
                </Link>
                <Link className="list-item" to="/">
                  <i className="fab fa-pinterest-square fa-lg ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
