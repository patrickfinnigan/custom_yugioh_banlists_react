import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BudgetListCall() {
  // I would recommend moving this into a service file, and exposing methods for the endpoints you want to reach
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

}
