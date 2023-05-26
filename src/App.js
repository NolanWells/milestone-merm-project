// import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Discover from "./views/discover";
import TopRated from "./views/TopRated";
import Upcoming from "./views/Upcoming";
import Profile from "./views/profile";
import Details from "./views/details";

function App() {
  return (
    <>
      <Router>
        <Container className="navbar navbar-expand-sm bg-dark navbar-light sticky-top">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Nav>
              {/* home */}
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/">Discover</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/TopRated">TopRated</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/Upcoming">Upcoming</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link to="/profile">View Profile</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              ></input>
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </div>
        </Container>
        <div className="display"></div>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
