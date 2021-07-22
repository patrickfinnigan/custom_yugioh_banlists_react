export default function EffectMonsters({
  name,
  type,
  desc,
  min_price,
  max_price,
  level,
  race,
}) {
  return (
    <tr className={["effect_monster"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>{name}</th>
      <th className={["normal-weight-text"]}>Forbidden</th>
      <th className={["normal-weight-text"]}>{min_price}</th>
      <th className={["normal-weight-text"]}>{max_price}</th>
    </tr>
  );
}
