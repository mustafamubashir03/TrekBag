import React, { useMemo, useState } from "react";
import Empty from "./Empty";
import ReactSelect from "react-select";
import { useItemStore } from "../stores/itemStore";

const options = [
  { value: "byDefault", label: "Sort by default" },
  { value: "byChecked", label: "Sort by checked" },
  { value: "byUnChecked", label: "Sort by unchecked" },
];

function Itemlist() {
  const itemInfo = useItemStore((state) => state.itemInfo);

  const [sortBy, setSortBy] = useState("default");
  const sortedList = useMemo(
    () =>
      [...itemInfo].sort((a, b) => {
        if (sortBy === "byChecked") {
          return b.checked - a.checked;
        } else if (sortBy === "byUnChecked") {
          return a.checked - b.checked;
        } else {
          return;
        }
      }),
    [sortBy, itemInfo]
  );
  return (
    <ul className="item-list">
      {itemInfo.length === 0 && <Empty />}
      {itemInfo.length > 0 && (
        <ReactSelect
          defaultValue={options[0]}
          onChange={(option) => setSortBy(option.value)}
          options={options}
        />
      )}
      {sortedList.map((info) => (
        <Item key={info.id} info={info} />
      ))}
    </ul>
  );
}

function Item({ info }) {
  const check = useItemStore((state) => state.check);
  const deleteItem = useItemStore((state) => state.deleteItem);
  return (
    <li className="item">
      <label>
        <input
          onChange={() => check(info.id)}
          type="checkbox"
          checked={info.checked}
        />
        <p>{info.name}</p>
      </label>
      <button onClick={() => deleteItem(info.id)}>❌</button>
    </li>
  );
}

export default Itemlist;
