import React, { useState, useEffect } from "react";

//Bootstrap imports
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

//Local Imports
import CustomBanlistLable from "./CustomBanlistLable.js";
import NormalMonsters from "./NormalMonsters.js";
import EffectMonsters from "./EffectMonsters.js";
import FusionMonsters from "./FusionMonsters.js";
import LinkMonsters from "./LinkMonsters.js";
import SynchroMonsters from "./SynchroMonsters.js";
import XYZMonsters from "./XYZMonsters.js";
import SpellCards from "./SpellCards.js";
import TrapCards from "./TrapCards.js";

import testbanlist from "../../public/testbanlist.json";

export default function CustomBanlistSemiLimited() {
  console.log(testbanlist.data);
  const [data] = useState([]);

  testbanlist.data.sort(function (a, b) {
    return a.name > b.name;
  });

  return (
    <>
      <Card>
        <Card.Body>
          <h2>Semi-Limited</h2>
          <div className="user-container">
            <Table bordered>
              <CustomBanlistLable />
              <tbody>
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          (card.type === "Normal Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Normal Tuner Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Pendulum Normal Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Ritual Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited")
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          (card.type === "Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Tuner Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Flip Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Flip Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Flip Tuner Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Gemini Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Union Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Pendulum Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Pendulum Flip Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Pendulum Tuner Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Ritual Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Toon Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Spirit Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited")
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          (card.type === "Fusion Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Pendulum Effect Fusion Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited")
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Link Monster" &&
                          card.banlist_info.ban_tcg === "Semi-Limited"
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          (card.type === "Synchro Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Synchro Pendulum Effect Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited") ||
                          (card.type === "Synchro Tuner Monster" &&
                            card.banlist_info.ban_tcg === "Semi-Limited")
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          (card.type === "XYZ Monster" &&
                            card.banlist_info.ban_tcg === "Limited") ||
                          (card.type === "XYZ Pendulum Effect Monster" &&
                            card.banlist_info.ban_tcg === "Limited")
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Spell Card" &&
                          card.banlist_info.ban_tcg === "Semi-Limited"
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
                        />
                      ))
                  : null}
                {data
                  ? testbanlist.data
                      .filter(
                        (card) =>
                          card.type === "Trap Card" &&
                          card.banlist_info.ban_tcg === "Semi-Limited"
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
                          status={card.banlist_info.ban_tcg}
                          reason_restricted={card.banlist_info.ban_tcg_reason}
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
