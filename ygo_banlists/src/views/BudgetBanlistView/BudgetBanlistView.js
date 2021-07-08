//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Local Imports
import MainNavBar from "../../components/GeneralComponents/MainNavBar.js";
import BudgetBanlist from "../../components/BudgetBanlist/BudgetBanlist.js";
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
            <BudgetBanlist />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
