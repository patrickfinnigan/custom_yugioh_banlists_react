//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import CustomBanlistForbidden from "../components/TestComponents/CustomBanlistForbidden.js";
import CustomBanlistLimited from "../components/TestComponents/CustomBanlistLimited.js";
// import PauperBanlistSemiLimited from "../components/TestComponents/PauperBanlistSemiLimited.js";
import SearchBox from "../components/GeneralComponents/SearchBox.js";

export default function TestView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <br />
      <Container>
        <Row>
          <Col>
            <SearchBox />
            <br />
            <CustomBanlistForbidden />
            <br />
            <CustomBanlistLimited />
            <br />
            {/* <PauperBanlistSemiLimited /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
