// import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container";

import Home from "./views/home";
import Profile from "./views/profile";
import Comment from "./views/comment";

function App() {
  return (
    <>
      <Router>
        <Container>
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

            <Nav.Item>
              <Nav.Link href="/">
                <Link to='/comment'>Add a Comment</Link>
              </Nav.Link>
            </Nav.Item>









          </Nav>
        </Container>
        <div className="display"></div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/comment' element={<Comment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
