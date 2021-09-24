import React, { useState, useEffect } from "react";

//Bootstrap imports
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

//Local Imports
import BudgetBanlistLable from "./BudgetBanlistLable.js";
import NormalMonsters from "./NormalMonsters.js";
import EffectMonsters from "./EffectMonsters.js";
import FusionMonsters from "./FusionMonsters.js";
import LinkMonsters from "./LinkMonsters.js";
import SynchroMonsters from "./SynchroMonsters.js";
import XYZMonsters from "./XYZMonsters.js";
import SpellCards from "./SpellCards.js";
import TrapCards from "./TrapCards.js";

import { YGoService } from "../../services/ygopro_axios.js";

export default function BudgetBanlistLimited() {
  const startprice = 10;
  const endprice = 19.99;
  const [data, setData] = useState([]);

  useEffect(() => {
    YGoService.getCardInfo()
      .then((info) => {
        setData(info);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // most of the code used to convert money values of each api entry

  function minPrice(card) {
    let { card_sets } = card;
    let { card_prices } = card;

    if (card_sets === undefined) {
      return;
    }

    let minPrice = Math.min(
      ...card_prices
        .filter((set) => set.tcgplayer_price !== "0.00")
        .map((set) => parseFloat(set.tcgplayer_price))
    );

    if (minPrice <= startprice) {
      return;
    } else if (minPrice >= endprice) {
      return;
    }

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
                      .filter(
                        (card) =>
                          (card.type === "Normal Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Normal Tuner Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Pendulum Normal Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Ritual Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined)
                      )
                      .map((card) => (
                        <NormalMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          (card.type === "Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Tuner Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Flip Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Flip Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Flip Tuner Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Gemini Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Union Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Pendulum Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Pendulum Flip Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Pendulum Tuner Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Ritual Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Toon Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Spirit Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined)
                      )
                      .map((card) => (
                        <EffectMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          (card.type === "Fusion Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Pendulum Effect Fusion Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined)
                      )
                      .map((card) => (
                        <FusionMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Link Monster" &&
                          card.card_sets !== undefined &&
                          minPrice(card) !== undefined
                      )
                      .map((card) => (
                        <LinkMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          (card.type === "Synchro Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Synchro Pendulum Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "Synchro Tuner Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined)
                      )
                      .map((card) => (
                        <SynchroMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          (card.type === "XYZ Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined) ||
                          (card.type === "XYZ Pendulum Effect Monster" &&
                            card.card_sets !== undefined &&
                            minPrice(card) !== undefined)
                      )
                      .map((card) => (
                        <XYZMonsters
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Spell Card" &&
                          card.card_sets !== undefined &&
                          minPrice(card) !== undefined
                      )
                      .map((card) => (
                        <SpellCards
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Trap Card" &&
                          card.card_sets !== undefined &&
                          minPrice(card) !== undefined
                      )
                      .map((card) => (
                        <TrapCards
                          type={card.type}
                          name={card.name}
                          href={
                            "https://db.ygoprodeck.com/card/?search=" +
                            card.name
                              .replace(",", "%2C")
                              .replace("#", "%23")
                              .replace("?", "%3F")
                              .replace(":", "%3A")
                              .replace("@", "%40")
                          }
                          status="Limited"
                          min_price={minPrice(card)}
                        />
                      ))
                  : null}
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
