import React from "react";
import { Header, DropButton, TextInput } from "grommet";
import { Clipboard } from "grommet-icons";
import CopyToClipboard from "react-copy-to-clipboard";
import { useSelectedItem } from "core/providers";

export const EditorHeader = () => {
  const [selectedItem, setSelectedItem] = useSelectedItem();

  return (
    <Header background="background" pad="xxsmall">
      <TextInput
        plain
        value={selectedItem?.name || ""}
        onChange={(event) => setSelectedItem({ name: event.target.value })}
      />
      <CopyToClipboard text={selectedItem?.value}>
        <DropButton
          dropAlign={{ top: "bottom", left: "left", right: "right" }}
          label={<Clipboard />}
          dropContent={
            <div pad="large" background="light-2">
              Copied!
            </div>
          }
        />
      </CopyToClipboard>
    </Header>
  );
};
