import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import LogoIcon from "../assets/logo-black.png"
import { BsLockFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "/about", title: "About" },
  { to: "/events", title: "Events" },
  { to: "/radio", title: "Radio" },
];

function AppNavbar() {
  return (
    <Navbar className="nav" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={Logo}
            height="30"
            className="logo d-inline-block align-top"
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
          <BsHeartFill />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
