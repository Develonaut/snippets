import React from "react";
import AceEditor from "react-ace";
import { editorThemes, editorLanguages } from "./config";

// IMPORTANT: Webpack imports and the component in general wont work without this resolver.
import "ace-builds/webpack-resolver";

// Tools
import "ace-builds/src-noconflict/ext-language_tools";

// // Modes
// import "ace-builds/src-noconflict/mode-css";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/mode-jsx";
// // Themes
// import "ace-builds/src-noconflict/theme-dracula";

editorLanguages.forEach(({ value }) => {
  require(`ace-builds/src-noconflict/mode-${value}`);
  require(`ace-builds/src-noconflict/snippets/${value}`);
});

editorThemes.forEach(({ value }) =>
  require(`ace-builds/src-noconflict/theme-${value}`)
);

export const CodeEditor = ({
  mode = "javascript",
  theme = "dracula",
  onChange,
  onCursorChange,
  editProps = {},
  ...other
}) => {
  return (
    <AceEditor
      mode={mode}
      theme={theme}
      onChange={onChange}
      onCursorChange={onCursorChange}
      name="code_editor"
      editorProps={{ $blockScrolling: true }}
      {...other}
    />
  );
};
