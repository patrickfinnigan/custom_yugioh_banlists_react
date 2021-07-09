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

export default function TestView() {
  const startprice = 0.5;
  const endprice = 99999.99;

  const [data, setData] = useState([]);

  const ygoproURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  useEffect(() => {
    const ygoproEndpoint =
      // ygoproURL + "?startprice=" + startprice + "&endprice=" + endprice;
      ygoproURL + "?name=Slime%20Toad";

    const getCardData = async () => {
      axios
        .get(`${ygoproEndpoint}`)
        .then((response) => {
          const cardData = response.data;
          setData(cardData);
          console.log(cardData);
          console.log(cardData.name);
        })
        .catch((error) => console.error(`Error: ${error}`));
    };
    getCardData();
  }, []);

  //   const name = 'Dark%20Magician'
  // const type = 'Effect%20Monster'

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
                  <h5 className="info-item">{JSON.stringify(data.name, null, 2)}</h5>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
