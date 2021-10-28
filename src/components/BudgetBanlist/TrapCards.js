export default function TrapCards({
  type,
  name,
  href,
  status,
  min_price, 
  max_price,
}) {
  return (
    <tr className={["trap_card"]}>
      <th className={["normal-weight-text type"]}>{type}</th>
      <th className={["normal-weight-text name"]}>
        <a href={href} target="_blank" rel="noreferrer">
          {name}
        </a>
      </th>
      <th className={["normal-weight-text status"]}>{status}</th>
      {/* <th className={["normal-weight-text"]}>{href}</th> */}
      <th className={["normal-weight-text min-price"]}>{min_price}</th>
    </tr>
  );
}
