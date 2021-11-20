//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
// import SearchBox from "../components/GeneralComponents/SearchBox.js";
import HiddenArsenalBanlistForbidden from "../components/HiddenArsenalBanlist/HiddenArsenalBanlistForbidden.js";
import HiddenArsenalBanlistLimited from "../components/HiddenArsenalBanlist/HiddenArsenalBanlistLimited.js";
import HiddenArsenalBanlistSemiLimited from "../components/HiddenArsenalBanlist/HiddenArsenalBanlistSemiLimited.js";
import HiddenArsenalBanlistUnlimited from "../components/HiddenArsenalBanlist/HiddenArsenalBanlistUnlimited.js";

export default function HiddenArsenalBanlistView() {
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
            <HiddenArsenalBanlistForbidden />
            <br />
            <HiddenArsenalBanlistLimited />
            <br />
            <HiddenArsenalBanlistSemiLimited />
            <br />
            <HiddenArsenalBanlistUnlimited />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
