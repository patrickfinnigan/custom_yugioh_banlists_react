import React, { useState, useEffect } from "react";
import axios from "axios";
// import TestRenderer from 'react-test-renderer';

//Bootstrap imports
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

//Local Imports
// import MainNavBar from "../components/GeneralComponents/MainNavBar.js";
import BudgetBanlistLable from "./BudgetBanlistLable.js";
// import NormalMonsters from "./NormalMonsters.js";
import NormalMonsters from "./NormalMonsters.js";
import EffectMonsters from "./EffectMonsters.js";
import SpellCards from "./SpellCards.js";

// import BudgetListCall from "../services/ygopro_axios_budget_call.js";

export default function LimitedTestPage() {
  // for the Banned cards, or all cards more than $5. The limited section for cards more than $1 will come later
  // You can make a separate component for the limited $1 and above from the forbidden $5 or above by making two api calls for each section

  // const name = "Dark Magician";
  const startprice = 1.0;
  const endprice = 4.99;
  const [data, setData] = useState([]);

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

  function maxPrice(card) {
    let { card_sets } = card;

    if (card_sets === undefined) {
      return true;
    }

    let maxPrice = Math.max(
      ...card_sets

        .filter(
          (set) =>
            set.set_price !== "0.00" &&
            set.set_price !== "0" &&
            set.set_price !== 0
        )
        .map((set) => parseFloat(set.set_price))
    );

    return formatter.format(maxPrice);
  }

  function minPrice(card) {
    let { card_sets } = card;

    if (card_sets === undefined) {
      return true;
    }

    let minPrice = Math.min(
      ...card_sets
        .filter(
          (set) =>
            set.set_price !== "0.00" &&
            set.set_price !== "0" &&
            set.set_price !== 0
        )
        .map((set) => parseFloat(set.set_price))
    );

    return formatter.format(minPrice);
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Limited: Cards {formatter.format(startprice)} and above</h2>
          <div className="user-container">
            <Table bordered>
              <BudgetBanlistLable />
              <tbody>
                {data
                  ? data
                      .filter((card) => card.type === "Normal Monster")
                      .map((card) => (
                        <NormalMonsters
                          type={card.type}
                          name={card.name}
                          status="Limited"
                          min_price={minPrice(card)}
                          max_price={maxPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter((card) => card.type === "Effect Monster")
                      .map((card) => (
                        <EffectMonsters
                          type={card.type}
                          name={card.name}
                          status="Limited"
                          min_price={minPrice(card)}
                          max_price={maxPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter((card) => card.type === "Spell Card")
                      .map((card) => (
                        <SpellCards
                          type={card.type}
                          name={card.name}
                          status="Limited"
                          min_price={minPrice(card)}
                          max_price={maxPrice(card)}
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
              {/* {data ? data.map((card) => TradingCard(card)) : null} */}
              {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
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
