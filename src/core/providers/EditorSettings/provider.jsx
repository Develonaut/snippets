import React, { createContext, useState } from "react";

export const initialValues = {
  theme: "dracula",
  mode: "javascript",
  fontSize: "13px",
};

export const EditorSettingsContext = createContext(initialValues);

export const EditorSettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialValues.theme);
  const [language, setLanguage] = useState(initialValues.mode);
  const [fontSize, setFontSize] = useState(initialValues.fontSize);
  return (
    <EditorSettingsContext.Provider
      value={{
        ...initialValues,
        theme,
        setTheme,
        language,
        setLanguage,
        fontSize,
        setFontSize,
      }}
    >
      {children}
    </EditorSettingsContext.Provider>
  );
};
