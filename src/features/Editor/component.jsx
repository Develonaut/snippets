import React, { useState } from "react";
import { EditorFooter } from "./EditorFooter";
import { EditorHeader } from "./EditorHeader";
import { EditorWorkspace } from "./EditorWorkspace";
import { useCollectionContext } from "core/providers";
import { StyledBox } from "./styles";

export const Editor = () => {
  const { loading } = useCollectionContext();
  const [cursor, setCursor] = useState({ row: 0, column: 0 });
  const handleCursorChange = ({ cursor: { row, column } }) =>
    setCursor({ row, column });

  if (loading) return <div>Loading...</div>;
  return (
    <StyledBox fill flex direction="column">
      <EditorHeader />
      <EditorWorkspace onCursorChange={handleCursorChange} />
      <EditorFooter cursor={cursor} />
    </StyledBox>
  );
};
