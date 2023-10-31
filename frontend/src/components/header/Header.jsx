import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>Crazy Phone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavDropdown
              title={<BsFillPersonFill />}
              style={{ fontSize: '20px' }}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>Mis publicaciones</NavDropdown.Item>
              <NavDropdown.Item>Lista de deseos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Salir</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
