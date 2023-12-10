import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import { Link } from 'react-router-dom';
import ToggleTheme from '../toggleTheme/ToggleTheme.jsx';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/theme.context.jsx';

const Header = () => {
  const { logout, isAuthenticated } = useAuthContext();
  const { theme } = useContext(ThemeContext);

  const exit = () => {
    logout();
  };

  return (
    <>
      <Navbar
        data-bs-theme={theme}
        expand="lg"
        className={`${
          theme === 'dark' ? 'border-white' : 'border-dark'
        } border-bottom`}
      >
        <Container>
          <Navbar.Brand href="#home">Crazy Phone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ml-auto">
            <Nav>
              <NavDropdown
                className="ms-auto d-none d-lg-block"
                title={<BsFillPersonFill />}
                style={{ fontSize: '20px' }}
                id="basic-nav-dropdown"
                drop={'start'}
              >
                {isAuthenticated ? (
                  <>
                    <NavDropdown.Item href="#action/3.1">
                      Mis publicaciones
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Lista de deseos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Link
                      to="/"
                      onClick={exit}
                      style={{ textDecoration: 'none' }}
                    >
                      <NavDropdown.Item>Salir</NavDropdown.Item>
                    </Link>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item href="login">Ingresar</NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav className="d-lg-none">
              {isAuthenticated ? (
                <>
                  <Nav.Link href="#action/3.1">Mis publicaciones</Nav.Link>
                  <Nav.Link href="#action/3.2">Lista de deseos</Nav.Link>
                  <Link
                    to="/"
                    onClick={exit}
                    style={{ textDecoration: 'none' }}
                  >
                    <Nav.Item>Salir</Nav.Item>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Nav.Item>Ingresar</Nav.Item>
                  </Link>
                </>
              )}
            </Nav>
            <Nav.Item>
              <ToggleTheme />
            </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
