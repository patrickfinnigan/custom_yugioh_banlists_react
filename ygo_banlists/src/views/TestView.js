import React, { useState, useEffect } from "react";
import axios from "axios";
// import TestRenderer from 'react-test-renderer';

//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import TestPage from "../components/TestComponents/TestPage.js";
import BudgetListCall from "../services/ygopro_axios_budget_call.js"

export default function TestView() {
  const name = "Dark Magician";
  const startprice = 0.5;
  const endprice = 99999.99;
  const [data, setData] = useState([]);

  useEffect(() => {
    getCardDataByName(name)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // It was recommended to move this into a service file, and exposing methods for the endpoints I want to reach
  
  function getCardDataByName(name, startprice, endprice) {
    const ygoproURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
    let ygoproEndpoint = `${ygoproURL}?name=${name}`;

    if (startprice) {
      ygoproEndpoint += `&startprice=${startprice}`;
    }

    if (endprice) {
      ygoproEndpoint += `&endprice=${endprice}`;
    }

    return axios.get(ygoproEndpoint);
  }

  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
            <TestPage />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="user-container">
                  <h5>If this works there should be API data down here</h5>
                  <div className="App">
                    {data ? data.map((el) => TradingCard(el)) : null}
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
function TradingCard({ name, type, desc, atk, def, level, race }) {
  return (
    <div>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>

        <dt>Type:</dt>
        <dd>{type}</dd>

        <dt>Description:</dt>
        <dd>{desc}</dd>

        <dt>Attack:</dt>
        <dd>{atk}</dd>

        <dt>Deferense:</dt>
        <dd>{def}</dd>

        <dt>Level:</dt>
        <dd>{level}</dd>

        <dt>Race:</dt>
        <dd>{race}</dd>
      </dl>
    </div>
  );
}
