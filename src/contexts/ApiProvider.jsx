import MicroblogApiClient from "../MicroblogApiClient";
import { ApiContext } from "./ApiContext";

export default function ApiProvider({ children }) {
  const api = new MicroblogApiClient();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
