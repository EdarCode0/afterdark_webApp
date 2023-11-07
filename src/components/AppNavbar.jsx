import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../assets/apple-13.svg";
import { BsLockFill } from "react-icons/bs";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/events", title: "Events" },
  { to: "/contact", title: "Contact Us" },
];

function AppNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, index) => (
              <Nav.Link as={Link} to={link.to} key={index}>
                {link.title}
              </Nav.Link>
            ))}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/action/3.1">
                Action
              </NavDropdown.Item>
              {/* ... other dropdown items */}
            </NavDropdown>
          </Nav>
          {/* Additional Nav component for 'Sign In' */}
          <Nav>
            <Nav.Link as={Link} to="/signin" className="ms-auto">
              Sign In <BsLockFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
