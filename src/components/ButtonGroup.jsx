import React from "react";
import Button from "./Button";
import { useItemStore } from "../stores/itemStore";

function ButtonGroup() {
  const markComplete = useItemStore((state) => state.markComplete);
  const markIncomplete = useItemStore((state) => state.markIncomplete);
  const reset = useItemStore((state) => state.reset);
  const remove = useItemStore((state) => state.remove);
  return (
    <section className="button-group">
      <Button onClick={markComplete} type={"secondary"}>
        Mark all as complete
      </Button>
      <Button onClick={markIncomplete} type={"secondary"}>
        Mark all as incomplete
      </Button>
      <Button onClick={reset} type={"secondary"}>
        Reset to initial
      </Button>
      <Button onClick={remove} type={"secondary"}>
        Remove all items
      </Button>
    </section>
  );
}

export default ButtonGroup;
