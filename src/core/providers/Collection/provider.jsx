import React, { createContext, useState } from "react";
import { javascript } from "core/data/snippets";
import { useEffect } from "react";

export const initialValues = {
  loading: false,
  items: [],
  selectedItemId: null,
  setSelectedItemId: () => {},
  updateSelectedItem: () => {},
};

export const CollectionContext = createContext(initialValues);

export const CollectionProvider = ({ children }) => {
  const [loading, setLoading] = useState(initialValues.loading);
  const [items, setItems] = useState(initialValues.items);
  const [selectedItemId, setSelectedItemId] = useState(
    initialValues.selectedItemId
  );

  useEffect(() => {
    setLoading(true);
    setItems(javascript.items);
    setSelectedItemId(javascript.items[0].id);
    setLoading(false);
  }, []);

  return (
    <CollectionContext.Provider
      value={{
        ...initialValues,
        loading,
        setLoading,
        items,
        setItems,
        selectedItemId,
        setSelectedItemId,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};
