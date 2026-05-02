import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar 
  style={{ backgroundColor: "#05398e" }} 
  expand="lg" 
  data-bs-theme="dark"
  fixed = "top"
>
  <Container>
    <Navbar.Brand as={Link} to="/" className="fw-bold">
     Net2abel
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/events">Events</Nav.Link>
        <Nav.Link as={Link} to="/create">Create Event</Nav.Link>
        <Nav.Link as={Link} to="/my-events">My Events</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavbarComponent;