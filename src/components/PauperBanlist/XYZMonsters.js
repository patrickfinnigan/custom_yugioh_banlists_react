export default function XYZMonsters({
  type,
  name,
  href,
  status,
  rarity
}) {
  return (
    <tr className={["xyz_monster"]}>
      <th className={["normal-weight-text type"]}>{type}</th>
      <th className={["normal-weight-text name"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text status"]}>{status}</th>
      {/* <th className={["normal-weight-text rarity"]}>{rarity}</th> */}
    </tr>
  );
}
