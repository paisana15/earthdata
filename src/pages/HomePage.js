import React, { useState } from "react";
// import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../assets/logo_transparent.svg";
import {
  Link
} from 'react-router-dom';
import { PaginatedList } from "react-paginated-list";
import { useEffect } from "react";
// import API from "../components/API";
import axios from "axios";
import filesize from "filesize";


export default function HomePage() {
  const [response, setResponse] = useState([]);

  useEffect(()=>{
    axios.get(
        "http://earthdata-api.storewise-dev.com:8000/home",
    )
        .then(res => {
            // console.log(res);
              // setResponse(response => [...response, res.data]);
            setResponse(res.data);
        })
        .catch(err=>{
            console.log("err");
        })
},[])


  // const [filterInput, setFilterInput] = useState("");

  // const handleFilterChange = e => {
  //   const value = e.target.value || undefined;
  //   setFilterInput(value);
  // };
  return (
    <div className="h-100">
      <header>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
            <img className="ml-4 logotype" src={Logo} alt="Earth Data logo" height="65" />
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
      <section className="first-section pb-5">
        <Form className="search-form" inline>
          <FormControl type="text" placeholder="Search datasets" className="mr-2" />
          {/* <input
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search name"}
          /> */}
          <Button variant="outline-success">Search</Button>
        </Form>

        <div className="card-data">
          <div className="d-flex observation-row p-3 p-3 border-bottom mb-0">
            <h3>
              Earth Observation Data
            </h3>

            <div className="social-wrapper text-right">
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
            <div className="d-flex flex-column w-100 p-3">
              {/* <h1 className="color-green">Earth Observation Data</h1> */}
              <div className="table">
                <div className="row-head">
                  <div className="cell sevencol">
                    <span>Cid</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Miner id</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Name</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Size</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Date</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Deal id</span>
                  </div>
                  <div className="cell sevencol">
                    <span>Topic</span>
                  </div>
                </div>

                <PaginatedList
                  activeControlClass="test"
                  list={response}
                  itemsPerPage={10}
                  renderList={(list) => (
                    <>
                      {list.map((item) => {
                        return (
                          <div className="row">
                            <div className="cell sevencol">
                        <li key={item.content["deal-id"]}>{item.content.cid}</li>
                            </div>
                            <div className="cell sevencol">
                        <li key={item.content["deal-id"]}>{item.content["miner-id"]}</li>
                            </div>
                            <div className="cell sevencol">
                        <li key={item.content["deal-id"]}>{item.content["file-name"]}</li>
                            </div>
                            <div className="cell sevencol">
                              <li key={item.content["deal-id"]}>{filesize(item.content.size)}</li>
                            </div>
                            <div className="cell sevencol">
                              <li key={item.content["deal-id"]}>{item.content.date}</li>
                            </div>
                            <div className="cell sevencol">
                              <li key={item.content["deal-id"]}>{item.content["deal-id"]}</li>
                            </div>
                            <div className="cell sevencol">
                              <li key={item.content["deal-id"]}>{item.topic.name}</li>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
