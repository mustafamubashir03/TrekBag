import { useContext } from "react";
import { itemsContext } from "../context/itemsContextProvider";

export function useItemsContext(){
    const items = useContext(itemsContext)
    return items;
}