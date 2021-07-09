import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

import BudgetBanlistLable from "./BudgetBanlistLable.js";
import NormalMonsters from "./NormalMonsters.js";
import EffectMonsters from "./EffectMonsters.js";
import FusionMonsters from "./FusionMonsters.js";
import LinkMonsters from "./LinkMonsters.js";
import SynchroMonsters from "./SynchroMonsters.js";
import XYZMonsters from "./XYZMonsters.js";
import SpellCards from "./SpellCards.js";
import TrapCards from "./TrapCards.js";


export default function BudgetBanlist() {
  return (
    <>
      <Card>
        <Card.Body>
          <Table bordered>
            <BudgetBanlistLable />
            <tbody>
              <NormalMonsters />
              <EffectMonsters />
              <FusionMonsters />
              <LinkMonsters />
              <SynchroMonsters />
              <XYZMonsters />
              <SpellCards />
              <TrapCards />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}
