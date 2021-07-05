import React from "react";
import { Footer, Box, Menu, Text } from "common";
import { useEditorSettingsContext } from "core/providers";
import { editorLanguages } from "../../../common/CodeEditor/config";

export const EditorFooter = ({ cursor }) => {
  const { language, setLanguage } = useEditorSettingsContext();

  return (
    <Footer background="background-back" pad="xxsmall" justify="between">
      <Menu
        label={language}
        items={editorLanguages.map((lang) => ({
          label: lang.value,
          onClick: () => setLanguage(lang.value),
        }))}
        value={language}
        onChange={({ option }) => setLanguage(option)}
      />
      <Box direction="row">
        <Text size="small">{`Line ${cursor.row}, Column ${cursor.column}`}</Text>
      </Box>
    </Footer>
  );
};
