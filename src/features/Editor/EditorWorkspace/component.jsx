import React from "react";
import { useEditorSettingsContext, useSelectedItem } from "core/providers";
import { StyledCodeEditor } from "./styles";
import { useEffect } from "react";

export const EditorWorkspace = ({ onCursorChange }) => {
  const { fontSize, theme, language, setLanguage } = useEditorSettingsContext();
  const [selectedItem, setSelectedItem] = useSelectedItem();

  useEffect(() => {
    setLanguage(selectedItem?.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  const handleOnChange = (value) => setSelectedItem({ value });

  return (
    <StyledCodeEditor
      value={selectedItem?.value || ""}
      theme={theme}
      mode={language}
      focus
      fontSize={fontSize}
      onCursorChange={onCursorChange}
      height="100%"
      width="100%"
      onChange={handleOnChange}
      enableBasicAutocompletion
      enableLiveAutocompletion
      enableSnippets
    />
  );
};
