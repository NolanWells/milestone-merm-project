// import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";

import Home from "./views/home";
import Profile from "./views/profile";
import Details from "./views/details";

function App() {
  return (
    <>
      <Router>
        <Container class="navbar navbar-expand-sm bg-dark navbar-light justify-content-center sticky-top">
        <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

          <Nav>
            {/* home */}
            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/'>Home</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/profile'>View Profile</Link>
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
          <form class="d-flex">
        <input class="form-control me-2" type="text" placeholder="Search"></input>
        <button class="btn btn-primary" type="button">Search</button>
      </form>
      </div>
        </Container>
        <div className="display"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
