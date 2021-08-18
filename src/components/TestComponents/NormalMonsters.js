export default function NormalMonsters({
  type,
  name,
  href,
  status,
  min_price,
}) {
  return (
    <tr className={["normal_monster"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text"]}>{status}</th>
      {/* <th className={["normal-weight-text"]}>{href}</th> */}
      <th className={["normal-weight-text"]}>{min_price}</th>
    </tr>
  );
}
