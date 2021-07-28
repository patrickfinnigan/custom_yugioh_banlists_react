export default function NormalMonsters({
  name,
  type,
  min_price, 
  max_price,
}) {
  return (
    <tr className={["normal_monster"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>{name}</th>
      <th className={["normal-weight-text"]}>Forbidden</th>
      <th className={["normal-weight-text"]}>{min_price}</th>
      <th className={["normal-weight-text"]}>{max_price}</th>
    </tr>
  );
}
