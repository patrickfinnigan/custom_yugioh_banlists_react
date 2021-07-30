import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container'

export default function MainNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/budget-banlist">Budget Banlist</Nav.Link>
            <Nav.Link href="/pauper-banlist">Pauper Banlist</Nav.Link>
            <Nav.Link href="/test-page">Test Page</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Action</NavDropdown.Item>
              <NavDropdown.Item href="/">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              AAA!
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
