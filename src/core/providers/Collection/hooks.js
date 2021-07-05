import { useContext, useMemo, useCallback } from "react";
import { CollectionContext } from "./provider";

export const useCollectionContext = () => useContext(CollectionContext);

export const useSelectedItem = () => {
  const { items, selectedItemId, setItems } = useCollectionContext();

  const selectedItemIndex = useMemo(
    () => items.findIndex(({ id }) => id === selectedItemId),
    [items, selectedItemId]
  );

  const selectedItem = useMemo(
    () => items[selectedItemIndex],
    [items, selectedItemIndex]
  );

  const updateSelectedItem = useCallback(
    (values) => {
      setItems((prevItems) => {
        const itemsCopy = [...prevItems];
        itemsCopy[selectedItemIndex] = {
          ...itemsCopy[selectedItemIndex],
          ...values,
        };
        return itemsCopy;
      });
    },
    [selectedItemIndex, setItems]
  );

  return [selectedItem, updateSelectedItem];
};
