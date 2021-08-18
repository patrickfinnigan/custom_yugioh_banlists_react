//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";

export default function ContactTemp() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header as="h5">Contact</Card.Header>
              <Card.Body>
                <Card.Title>
                  Hit me up is you got any questions or comments
                </Card.Title>
                <Card.Text>
                  <a href="https://github.com/patrickfinnigan/custom_yugioh_banlists_react" target="_blank" rel="noreferrer">
                    my repo where all this stupid code is
                  </a>
                  <a href="https://twitter.com/the_breezyp" target="_blank" rel="noreferrer">
                    my twitter
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
