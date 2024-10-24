import React from "react";
import { useItemStore } from "../stores/itemStore";

function Counter() {
  const currentCount = useItemStore((state) => state.currentCount);
  const totalCount = useItemStore((state) => state.totalCount);

  return (
    <p>
      <b>{currentCount}</b> / {totalCount} items packed
    </p>
  );
}

export default Counter;
