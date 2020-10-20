// import React, { useState } from "react";
import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from "../assets/logo_transparent.svg";
import {
  Link
} from 'react-router-dom';
import { PaginatedList } from "react-paginated-list";
// import { useEffect } from "react";


export default function HomePage() {
  let users =
    [
      { 'a': 123, 'b': 345 },
      { 'a': 678, 'b': 891 },
      { 'a': 123, 'b': 345 },
      { 'a': 2848234, 'b': 'asdasdasd' },
      { 'a': 'fsf', 'b': 'assss' },
      { 'a': 123, 'b': 345 },
      { 'a': 123, 'b': 345 },
      { 'a': 123, 'b': 345 }
    ];

  // const [data, setData] = useState([]);
  //const loading, setLoading = useState(false);
  // const getData = async () => {
  //   try {
  //     const data = await axios.get(
  //       "url"
  //     );
  // setData(data.data)
  //     console.log(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // },[]);

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
                  <div className="cell sixcol">
                    <span>number</span>
                  </div>
                  <div className="cell sixcol">
                    <span>Cid</span>
                  </div>
                  <div className="cell sixcol">
                    <span>Miner</span>
                  </div>
                  <div className="cell sixcol">
                    <span>Name</span>
                  </div>
                  <div className="cell sixcol">
                    <span>Size</span>
                  </div>
                  <div className="cell sixcol">
                    <span>State</span>
                  </div>
                </div>

                <PaginatedList
                  activeControlClass="test"
                  list={users}
                  itemsPerPage={6}
                  renderList={(list) => (
                    <>
                      {list.map((item, index) => {
                        return (
                          <div className="row">
                            <div className="cell sixcol">
                              <span>{index}</span>
                            </div>
                            <div className="cell sixcol">
                              <span>Cid number{item.a}</span>
                            </div>
                            <div className="cell sixcol">
                              <span>Miner number{item.b}</span>
                            </div>
                            <div className="cell sixcol">
                              <span>nameeee string{item.a}</span>
                            </div>
                            <div className="cell sixcol">
                              <span>Size number{item.b}</span>
                            </div>
                            <div className="cell sixcol">
                              <span>What stateee{item.a}</span>
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
