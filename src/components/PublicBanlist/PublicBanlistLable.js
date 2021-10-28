export default function PublicBanlistLable() {
  return (
    <thead>
      <tr className={["banlist_label"]}>
        <th className={["label_card_type"]}>Card Type</th>
        <th className={["label_card_name"]}>Card Name</th>
        <th className={["label_standing"]}>Standing</th>
        <th className={["label_reason"]}>Reason</th>
      </tr>
    </thead>
  );
}
