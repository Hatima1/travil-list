import { useState } from "react";
import Item from "./items.jsx";
export default function Packinglist({ items, deletitem, checkbox, clear }) {
  const [sortby, setsortby] = useState("input");
  let sorteditem;
  if (sortby === "input") sorteditem = items;
  if (sortby === "description")
    sorteditem = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sorteditem = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sorteditem.map((item) => (
          <Item
            obj={item}
            key={item.id}
            deletitemforone={deletitem}
            checkboxfornone={checkbox}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(a) => setsortby(a.target.value)}>
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
        <button onClick={clear}>clear list</button>
      </div>
    </div>
  );
}
