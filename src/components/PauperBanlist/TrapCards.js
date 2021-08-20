export default function TrapCards({
  type,
  name,
  href,
  status,
  rarity
}) {
  return (
    <tr className={["trap_card"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text"]}>{status}</th>
      <th className={["normal-weight-text"]}>{rarity}</th>
    </tr>
  );
}
