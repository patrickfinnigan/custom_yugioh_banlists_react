import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function PauperBanlistRarityKey() {
  return (
    <Card>
      <Card.Header as="h5">Card Rarity Key</Card.Header>
      <Card.Body>
        <Row>
          <Col sm>
            {" "}
            <Card.Text>
              <ul>
                <li>Rare = (R)</li>
                <li>Super Rare = (SR)</li>
                <li>Holofoil Rare = (HFR)</li>
                <li>Ultra Rare = (UR)</li>
                <li>Ultimate Rare = (UtR)</li>
                <li>Secret Rare = (ScR)</li>
                <li>Ultra Secret Rare = (UScR)</li>
                <li>Secret Ultra Rare = (SCuR)</li>
                <li>Platinum Secret Rare = (PS)</li>
                <li>Prismatic Secret Rare = (PScR)</li>
                <li>Ghost Rare = (GR)</li>
              </ul>
            </Card.Text>
          </Col>
          <Col sm>
            {" "}
            <Card.Text>
              <ul>
                <li>Parallel Rare = (PR)</li>
                <li>Parallel Common = (PC)</li>
                <li>Super Parallel Rare = (SPR)</li>
                <li>Ultra Parallel Rare = (UPR)</li>
                <li>Duel Terminal Edition = (DT)</li>
                <li>Duel Terminal Parallel Common = (DPC)</li>
                <li>Duel Terminal Normal Parallel = (DNPR)</li>
                <li>Duel Terminal Normal Parallel Rare = (DNPR)</li>
                <li>Duel Terminal Rare Parallel Rare = (DRPR)</li>
                <li>Duel Terminal Super Parallel Rare = (DSPR)</li>
                <li>Duel Terminal Ultra Parallel Rare = (DUPR)</li>
              </ul>
            </Card.Text>
          </Col>
          <Col sm>
            {" "}
            <Card.Text>
              <ul>
                <li>Duel Terminal Secret Parallel Rare = (DScPR)</li>
                <li>Gold Rare = (GUR)</li>
                <li>Gold Secret Rare = (GScR)</li>
                <li>Ghost/Gold Rare = (GGR)</li>
                <li>Short Print = (SP)</li>
                <li>Starfoil Rare = (SFR)</li>
                <li>Mosaic Rare = (MSR)</li>
                <li>Shatterfoil Rare = (SHR)</li>
                <li>Collectors Rare = (CR)</li>
                <li>Holographic Parallel Rare = (HGPR)</li>
                <li>Platinum Secret Rare = (PS)</li>
                <li>Platinum Rare = (PIR)</li>
              </ul>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
