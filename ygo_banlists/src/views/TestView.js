import React, { useState, useEffect } from "react";
import axios from "axios";
// import TestRenderer from 'react-test-renderer';

//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

//Local Imports
import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import TestPage from "../components/TestComponents/TestPage.js";
import BudgetBanlistLable from "../components/BudgetBanlist/BudgetBanlistLable.js";
// import NormalMonsters from "../components/BudgetBanlist/NormalMonsters.js";
import NormalMonsters from "../components/TestComponents/NormalMonsters.js";

import BudgetListCall from "../services/ygopro_axios_budget_call.js";

export default function TestView() {
  // for the Banned cards, or all cards more than $5. The limited section for cards more than $1 will come later
  // const name = "Dark Magician";
  const startprice = 5.0;
  const endprice = 99999.99;
  const [data, setData] = useState([]);

  // how to apply api names to these values?
  let name = data.name;
  let type = data.type;

  console.log(name);

  let price_array = [];

  useEffect(() => {
    getCardDataByPrice(startprice, endprice)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // It was recommended to move this into a service file, and exposing methods for the endpoints I want to reach

  function getCardDataByPrice(startprice, endprice) {
    const ygoproURL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
    let ygoproEndpoint = `${ygoproURL}?startprice=${startprice}&endprice=${endprice}`;

    if (startprice) {
      ygoproEndpoint += `&startprice=${startprice}`;
    }

    if (endprice) {
      ygoproEndpoint += `&endprice=${endprice}`;
    }

    return axios.get(ygoproEndpoint);
  }

  // most of the code used to convert money values of each api entry

  let min_price = Math.min(...price_array);
  let max_price = Math.max(...price_array);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  let min_price_usd = formatter.format(min_price);
  let max_price_usd = formatter.format(max_price);

  console.log(name);
  console.log(min_price);

  return (
    <div>
      <header>
        <MainNavBar />
      </header>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <div className="user-container">
                  <Table bordered>
                    <BudgetBanlistLable />
                    <tbody>
                      {data
                        ? data.map((el) => (
                            <NormalMonsters
                              name={name}
                              min_price={min_price_usd}
                              max_price={max_price_usd}
                              type={type}
                            />
                          ))
                        : null}
                      {/* <EffectMonsters /> */}
                      {/* <FusionMonsters /> */}
                      {/* <LinkMonsters /> */}
                      {/* <SynchroMonsters /> */}
                      {/* <XYZMonsters /> */}
                      {/* <SpellCards /> */}
                      {/* <TrapCards /> */}
                    </tbody>
                  </Table>
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
