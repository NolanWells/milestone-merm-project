import './App.css';
import { HashRouter as Router, Link, Route, Routes } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Discover from "./views/discover";
import TopRated from "./views/TopRated";
import Upcoming from "./views/Upcoming";
import Details from "./views/details";

function App() {
  return (
      <Router>
        <Container style={{
          backgroundImage: 'linear-gradient(92.83deg, #4b0082 0%, #000000 100%)',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          
            <Nav justify variant="tabs,dark" defaultActiveKey="/home" bg="dark">

              <Nav.Item>
                <Nav.Link href="/">
                  <Link className='discoverLink' to="/"style={{textDecoration: 'none'}}>Discover</Link>
                </Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Nav.Link href="/">
                  <Link className='topRatedLink' to="/TopRated"style={{textDecoration: 'none'}}>TopRated</Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/">
                  <Link className='upcomingLink' to="/Upcoming"style={{textDecoration: 'none'}}>Upcoming</Link>
                </Nav.Link>
              </Nav.Item>

              
            </Nav>
         
        </Container>

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/details/:movie_id" element={<Details />} />
        </Routes>
      </Router>
  );
}

export default App;
