import { Box, Text } from "common";
import { StyledList } from "./styles";
import React from "react";
import {
  useCollectionContext,
  useEditorSettingsContext,
} from "../../core/providers";
import { getLanguageLabel } from "common/CodeEditor/config";

export const Collection = () => {
  const { loading, items, setSelectedItemId, selectedItemId } =
    useCollectionContext();
  const { setLanguage } = useEditorSettingsContext();

  const handleSelectItem = (item) => () => {
    setSelectedItemId(item.id);
    setLanguage(item.language);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <Box border="vertical">
      <StyledList
        primaryKey="name"
        secondaryKey="value"
        flex
        border="horizontal"
        direction="column"
        pad="none"
        data={items}
        children={(item) => (
          <Box
            pad="small"
            key={item.id}
            flex
            direction="column"
            overflow="hidden"
            onClick={handleSelectItem(item)}
            background={
              selectedItemId === item.id ? "background-front" : "none"
            }
          >
            <Text>{item.name}</Text>
            <Text truncate size="xsmall" style={{ minHeight: 18 }}>
              {item.value}
            </Text>
            <Text size="xsmall">{getLanguageLabel(item.language)}</Text>
          </Box>
        )}
      />
    </Box>
  );
};
