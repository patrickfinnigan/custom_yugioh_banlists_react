//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import PauperBanlistForbidden from "../components/PauperBanlist/PauperBanlistForbidden.js";
import PauperBanlistLimited from "../components/PauperBanlist/PauperBanlistLimited.js";
import PauperBanlistRarityKey from "../components/PauperBanlist/PauperBanlistRarityKey.js";
// import PauperBanlistSemiLimited from "../components/PauperBanlist/PauperBanlistSemiLimited.js";
// import "./PauperBanlistView.scss";

export default function PauperBanlistView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <br />
      <Container fluid="sm">
        <Row>
          <Col>
            <PauperBanlistForbidden />
            <br />
            <PauperBanlistLimited />
            {/* <br />
            <PauperBanlistSemiLimited /> */}
            <br />
            <PauperBanlistRarityKey />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
