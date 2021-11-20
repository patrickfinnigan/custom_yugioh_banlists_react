export default function NormalMonsters({
  type,
  name,
  href,
  status,
  reason_restricted,
}) {
  return (
    <tr className={["normal_monster"]}>
      <th className={["normal-weight-text type"]}>{type}</th>
      <th className={["normal-weight-text name"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text status"]}>{status}</th>
      <th className={["normal-weight-text reason-restricted"]}>{reason_restricted}</th>
    </tr>
  );
}
