export default function BudgetBanlistLable() {
  return (
    <thead>
      <tr className={["banlist_label"]}>
        <th className={["label_card_type"]}>Card Type</th>
        <th className={["label_card_name"]}>Card Name</th>
        <th className={["label_budget_format"]}>Budget Format</th>
        <th className={["label_min_price"]}>Min Price</th>
      </tr>
    </thead>
  );
}
