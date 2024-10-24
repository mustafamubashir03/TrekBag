
// Items context for using context api instead of Zustand //

import React, { createContext, useEffect, useState } from "react";
import { initialInfo } from "../components/constants";

export const itemsContext = createContext();
function ItemsContextProvider({ children }) {
  const [itemInfo, setItemInfo] = useState(() => {
    return JSON.parse(localStorage.getItem("savedInfo")) || initialInfo;
  });
  const totalCount = itemInfo.length;
  let currentCount = itemInfo.filter((item) => item.checked === true).length;
  useEffect(() => {
    localStorage.setItem("savedInfo", JSON.stringify(itemInfo));
  }, [itemInfo]);
  const handleAddItem = (name) => {
    if (!name) {
      return;
    }
    const item = {
      id: new Date().getTime(),
      name: name,
      checked: false,
    };
    setItemInfo((prev) => [...prev, item]);
  };
  const handleDeleteItem = (id) => {
    setItemInfo(itemInfo.filter((item) => item.id !== id));
  };
  const handleCheck = (id) => {
    setItemInfo(
      itemInfo.map((item) => {
        if (item.id === id) {
          return (item = { ...item, checked: !item.checked });
        }
        return item;
      })
    );
  };
  const markComplete = () => {
    setItemInfo(itemInfo.map((item) => ({ ...item, checked: true })));
  };
  const markIncomplete = () => {
    setItemInfo(itemInfo.map((item) => ({ ...item, checked: false })));
  };
  const reset = () => {
    setItemInfo(initialInfo);
  };
  const remove = () => {
    setItemInfo([]);
  };

  return (
    <itemsContext.Provider
      value={{
        itemInfo,
        setItemInfo,
        totalCount,
        currentCount,
        handleAddItem,
        handleCheck,
        handleDeleteItem,
        remove,
        reset,
        markComplete,
        markIncomplete,
      }}
    >
      {children}
    </itemsContext.Provider>
  );
}

export default ItemsContextProvider;
