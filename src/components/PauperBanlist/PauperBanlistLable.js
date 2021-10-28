export default function PauperBanlistLable() {
  return (
    <thead>
      <tr className={["banlist_label"]}>
        <th className={["label_card_type"]}>Card Type</th>
        <th className={["label_card_name"]}>Card Name</th>
        <th className={["label_pauper_format"]}>Pauper Format</th>
        <th className={["label_current_prints"]}>Current Prints</th>
      </tr>
    </thead>
  );
}
