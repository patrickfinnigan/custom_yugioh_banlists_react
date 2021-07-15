export default function NormalMonsters({
  name,
  type,
  desc,
  atk,
  def,
  level,
  race,
}) {
  return (
    <tr className={["normal_monster"]}>
      <th className={["normal-weight-text"]}>{name}</th>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>Forbidden</th>
      <th className={["normal-weight-text"]}>{atk}</th>
      <th className={["normal-weight-text"]}>{def}</th>
      <th className={["normal-weight-text"]}>{level}</th>
      <th className={["normal-weight-text"]}>{race}</th>
      <th className={["normal-weight-text"]}>$9999.99</th>
    </tr>
  );
}
