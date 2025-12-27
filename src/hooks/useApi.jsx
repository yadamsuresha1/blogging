import { createContext, useContext } from "react";

export const ApiContext = createContext();

export function useApi() {
  return useContext(ApiContext);
}
