import { theme } from "core";
import { Editor, Collection, Nav } from "features";
import { Grommet } from "grommet";
import { Box } from "common";
import React from "react";
import { CollectionProvider, useAppContext } from "core/providers";
import { EditorSettingsProvider } from "../providers";

export const App = () => {
  const { themeMode } = useAppContext();

  return (
    <Grommet theme={theme} themeMode={themeMode} full direction="row">
      <Box flex direction="row" fill>
        <Nav />
        <CollectionProvider>
          <EditorSettingsProvider>
            <Collection />
            <Editor />
          </EditorSettingsProvider>
        </CollectionProvider>
      </Box>
    </Grommet>
  );
};
