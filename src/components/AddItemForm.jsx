import React, { useRef, useState } from "react";
import Button from "./Button";
import { useItemStore } from "../stores/itemStore";

function AddItemForm() {
  const addItem = useItemStore((state) => state.addItem);
  const inputFocusRef = useRef(false);
  const [newItem, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(newItem);
    setNewItem("");
    inputFocusRef.current.focus();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
        ref={inputFocusRef}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}

export default AddItemForm;
