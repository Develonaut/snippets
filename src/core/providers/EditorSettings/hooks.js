import { useContext } from "react";
import { EditorSettingsContext } from "./provider";

export const useEditorSettingsContext = () => useContext(EditorSettingsContext);
