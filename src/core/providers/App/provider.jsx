import React, { createContext, useState } from "react";

export const initialValues = {
  themeMode: "dark",
};

export const AppContext = createContext(initialValues);

export const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(initialValues.themeMode);

  return (
    <AppContext.Provider
      value={{
        ...initialValues,
        themeMode,
        setThemeMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
