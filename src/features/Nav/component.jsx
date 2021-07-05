import { List, Text } from "common";
import React from "react";
import { StyledBox } from "./styles";

export const Nav = () => {
  return (
    <StyledBox fill overflow="hidden" background="background-front">
      <List
        pad="xxsmall"
        background="background-front"
        primaryKey="name"
        secondaryKey="value"
        data={[{ name: "Snippets", value: "snippets" }]}
        children={(item) => <Text>{item.name}</Text>}
      />
    </StyledBox>
  );
};
