import React, { useState, useEffect } from "react";

//Bootstrap imports
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

//Local Imports
import PauperBanlistLable from "./PauperBanlistLable.js";
import NormalMonsters from "./NormalMonsters.js";
import EffectMonsters from "./EffectMonsters.js";
import FusionMonsters from "./FusionMonsters.js";
import LinkMonsters from "./LinkMonsters.js";
import SynchroMonsters from "./SynchroMonsters.js";
import XYZMonsters from "./XYZMonsters.js";
import SpellCards from "./SpellCards.js";
import TrapCards from "./TrapCards.js";

import { YGoService } from "../../services/ygopro_axios.js";

export default function PauperBanlistForbidden() {
  const [data, setData] = useState([]);

  useEffect(() => {
    YGoService.getCardInfo()
      .then((info) => {
        setData(info);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  function cardId(card) {
    // this is where i will convert a card's name into a string with no spaces or capitalization and use that as a card's search id
    // that way i can just convert whatever search term a user may enter into a no space, no cap string and just match the ids
    // and smooth scroll the view to the entry and give the entry a highlight
  }

  function cardRarity(card) {
    let { card_sets } = card;

    if (card_sets === undefined) {
      return;
    }

    let raritySearch = {
      ...card_sets
        .filter((set) => set.set_rarity_code !== undefined)
        .map((set) => set.set_rarity_code),
    };

    if (Object.values(raritySearch).includes("(C)")) {
      return;
    } else if (Object.values(raritySearch).includes("(R)")) {
      return;
    } else if (Object.values(raritySearch).includes("(SP)")) {
      return;
    }

    let currentCardRarities = [];

    for (const [key, value] of Object.entries(raritySearch)) {
      if (currentCardRarities.indexOf(value.replace("(", "").replace(")", ", ")) !== -1) {
        return;
      } else {
        currentCardRarities += value.replace("(", "").replace(")", ", ");
      }
    }

    return currentCardRarities.slice(0, -2);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Forbidden: No avalible Common or Rare printings</h2>
          <div className="user-container">
            <Table bordered>
              <PauperBanlistLable />
              <tbody>
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Normal Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Effect Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Fusion Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Link Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Synchro Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "XYZ Monster" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Spell Card" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
                        />
                      ))
                  : null}
                {data
                  ? data
                      .filter(
                        (card) =>
                          card.type === "Trap Card" &&
                          card.card_sets !== undefined &&
                          cardRarity(card) !== undefined
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
                          status="Forbidden"
                          rarity={cardRarity(card)}
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
