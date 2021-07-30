//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import BudgetBanlistForbidden from "../components/BudgetBanlist/BudgetBanlistForbidden.js";
import BudgetBanlistLimited from "../components/BudgetBanlist/BudgetBanlistLimited.js";
import BudgetBanlistSemiLimited from "../components/BudgetBanlist/BudgetBanlistSemiLimited.js";
// import "./BudgetBanlistView.scss";

export default function BudgetBanlistView() {
  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
            <BudgetBanlistForbidden />
            <br />
            <BudgetBanlistLimited />
            <br />
            <BudgetBanlistSemiLimited />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
