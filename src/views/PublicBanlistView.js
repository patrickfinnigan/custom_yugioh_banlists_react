//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
// import SearchBox from "../components/GeneralComponents/SearchBox.js";
import PublicBanlistForbidden from "../components/PublicBanlist/PublicBanlistForbidden.js";
import PublicBanlistLimited from "../components/PublicBanlist/PublicBanlistLimited.js";
import PublicBanlistSemiLimited from "../components/PublicBanlist/PublicBanlistSemiLimited.js";
import PublicBanlistUnlimited from "../components/PublicBanlist/PublicBanlistUnlimited.js";

export default function PublicBanlistView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <br />
      <Container>
        <Row>
          <Col>
            {/* <SearchBox /> */}
            {/* <br /> */}
            <PublicBanlistForbidden />
            <br />
            <PublicBanlistLimited />
            <br />
            <PublicBanlistSemiLimited />
            <br />
            <PublicBanlistUnlimited />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
