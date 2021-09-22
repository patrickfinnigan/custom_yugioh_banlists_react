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

import testbanlist from "../../public/testbanlist.json";

import axios from "axios";

export default function CustomBanlistForbidden() {
  console.log(testbanlist.data);
  const [data] = useState([]);



  return (
    <>
      {/* <Card>
        <Card.Body>
          <div className="cards">
            {data
              ? testbanlist.data
                  // .filter((card) => card.type === "Normal Monster")
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
                      // rarity={cardRarity(card)}
                    />
                  ))
              : null}
          </div>
        </Card.Body>
      </Card> */}
      {/* <br /> */}
      <Card>
        <Card.Body>
          <h2>Forbidden: Reality can be Whatever I Want</h2>
          <div className="user-container">
            <Table bordered>
              <PauperBanlistLable />
              <tbody>
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Normal Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Effect Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Fusion Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Link Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Synchro Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "XYZ Monster" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Spell Card" &&
                          card.banlist_info.ban_tcg === "Banned"
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
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Trap Card" &&
                          card.banlist_info.ban_tcg === "Banned"
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
// function TradingCard({ name, type, desc, atk, def, level, race }) {
//   return (
//     <div>
//       <dl>
//         <dt>Name:</dt>
//         <dd>{name}</dd>

//         <dt>Type:</dt>
//         <dd>{type}</dd>

//         <dt>Description:</dt>
//         <dd>{desc}</dd>

//         <dt>Attack:</dt>
//         <dd>{atk}</dd>

//         <dt>Deferense:</dt>
//         <dd>{def}</dd>

//         <dt>Level:</dt>
//         <dd>{level}</dd>

//         <dt>Race:</dt>
//         <dd>{race}</dd>
//       </dl>
//     </div>
//   );
// }
