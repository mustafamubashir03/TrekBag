// Zustand for state management//


import { create } from "zustand";
import { initialInfo } from "../components/constants";

export const useItemStore = create((set) => ({
  itemInfo: initialInfo,
  totalCount: (state) => ({ itemInfo: state.itemInfo.length }),
  currentCount: (state) => ({
    itemInfo: state.itemInfo.filter((item) => item.checked === true).length,
  }),
  remove: () => {
    set(() => ({ itemInfo: [] }));
  },
  reset: () => {
    set(() => ({ itemInfo: initialInfo }));
  },
  markComplete: () => {
    set((state) => ({
      itemInfo: state.itemInfo.map((item) => ({ ...item, checked: true })),
    }));
  },
  markIncomplete: () => {
    set((state) => ({
      itemInfo: state.itemInfo.map((item) => ({ ...item, checked: false })),
    }));
  },
  addItem: (name) => {
    if (!name) {
      return;
    }
    const item = {
      id: new Date().getTime(),
      name: name,
      checked: false,
    };
    set((state) => ({ itemInfo: [...state.itemInfo, item] }));
  },
  deleteItem: (id) => {
    set((state) => ({
      itemInfo: state.itemInfo.filter((item) => item.id !== id),
    }));
  },
  check: (id) => {
    set((state) => ({
      itemInfo: state.itemInfo.map((item) => {
        if (item.id === id) {
          return (item = { ...item, checked: !item.checked });
        }
        return item;
      }),
    }));
  },
}));
