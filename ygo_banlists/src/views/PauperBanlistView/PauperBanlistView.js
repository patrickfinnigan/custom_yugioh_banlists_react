//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../../components/GeneralComponents/MainNavBar.js";
import PauperBanlist from "../../components/PauperBanlist/PauperBanlist.js";
// import "./PauperBanlistView.scss";

export default function PauperBanlistView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
            <PauperBanlist />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
