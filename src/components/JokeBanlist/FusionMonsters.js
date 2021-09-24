export default function FusionMonsters({
  type,
  name,
  href,
  status,
  reason_restricted,
}) {
  return (
    <tr className={["fusion_monster"]}>
      <th className={["normal-weight-text"]}>{type}</th>
      <th className={["normal-weight-text"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text"]}>{status}</th>
      <th className={["normal-weight-text"]}>{reason_restricted}</th>
    </tr>
  );
}
