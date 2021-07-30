import axios from "axios";

/**
 * https://db.ygoprodeck.com/api-guide/
 */
const agent = axios.create({
  baseURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php"
});

export const YGoService = {
  getCardInfo(name, card_sets) {
    return agent
      .get("cardinfo.php", {
        params: {
          name,
          card_sets
        }
      })
      .then((res) => res.data.data);
  }
};