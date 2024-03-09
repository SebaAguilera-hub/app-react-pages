import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 
export const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/app-react-pages/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/app-react-pages/">Home</Nav.Link>
            <Nav.Link as={Link} to="/app-react-pages/movies">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
