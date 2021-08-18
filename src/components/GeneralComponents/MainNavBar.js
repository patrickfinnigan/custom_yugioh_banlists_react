import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from 'react-bootstrap/Container'

export default function MainNavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Alternate Format Banlists</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/budget-banlist">Budget Banlist</Nav.Link>
            <Nav.Link href="/pauper-banlist">Pauper Banlist</Nav.Link>
            <Nav.Link href="/test-page">Test Page</Nav.Link>
            <NavDropdown title="Other Links" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">About</NavDropdown.Item>
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/test-page">Test Page</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="https://github.com/patrickfinnigan/custom_yugioh_banlists_react">
              Code Repo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
