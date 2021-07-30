//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import ForbiddenTestPage from "../components/TestComponents/ForbiddenTestPage.js";

import LimitedTestPage from "../components/TestComponents/LimitedTestPage.js";

export default function TestView() {

  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
          <ForbiddenTestPage />
          <br />
          <LimitedTestPage />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

