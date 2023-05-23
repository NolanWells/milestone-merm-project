// import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";

import Home from "./views/home";
import TopRated from "./views/TopRated";
import Upcoming from "./views/Upcoming";
import Profile from "./views/profile";
import Details from "./views/details";

function App() {
  return (
    <>
      <Router>
        <Container fixed="top" className="sticky-top">
          <Nav>
            {/* home */}
            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/'>Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/TopRated'>TopRated</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/Upcoming'>Upcoming</Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/profile'>View Profile</Link>
              </Nav.Link>
            </Nav.Item>
            
          </Nav>
        </Container>
        <div className="display"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/TopRated' element={<TopRated />} />
          <Route path='/Upcoming' element={<Upcoming />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
