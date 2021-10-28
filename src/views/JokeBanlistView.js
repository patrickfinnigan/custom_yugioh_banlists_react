//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
// import SearchBox from "../components/GeneralComponents/SearchBox.js";
import JokeBanlistForbidden from "../components/JokeBanlist/JokeBanlistForbidden.js";
import JokeBanlistLimited from "../components/JokeBanlist/JokeBanlistLimited.js";
import JokeBanlistSemiLimited from "../components/JokeBanlist/JokeBanlistSemiLimited.js";
import JokeBanlistUnlimited from "../components/JokeBanlist/JokeBanlistUnlimited.js";

export default function JokeBanlistView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <br />
      <Container fluid="sm">
        <Row>
          <Col>
            {/* <SearchBox /> */}
            {/* <br /> */}
            <JokeBanlistForbidden />
            <br />
            <JokeBanlistLimited />
            <br />
            <JokeBanlistSemiLimited />
            <br />
            <JokeBanlistUnlimited />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
