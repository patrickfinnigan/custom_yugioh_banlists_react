export default function FusionMonsters({
  type,
  name,
  status,
  min_price, 
  max_price,
}) {
  return (
    <tr className={["fusion_monster"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>{name}</th>
      <th className={["normal-weight-text"]}>{status}</th>
      <th className={["normal-weight-text"]}>{min_price}</th>
    </tr>
  );
}
