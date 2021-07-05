import { useContext } from "react";
import { AppContext } from "./provider";

export const useAppContext = () => useContext(AppContext);
