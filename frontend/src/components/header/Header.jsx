import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import Button from 'react-bootstrap/esm/Button';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Crazy Phone</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Telefonos</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
          <Button variant="success" style={{ marginRight: '20px' }}>Publicar</Button>
            <NavDropdown title={<BsFillPersonFill />}
              style={{ fontSize: '20px' }}
              id="basic-nav-dropdown"
              >
              <NavDropdown.Item href="#action/3.1">Mis publicaciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lista de deseos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Salir</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default Header;
