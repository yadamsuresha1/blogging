import { ApiContext } from "../hooks/useApi";
import MicroblogApiClient from "../MicroblogApiClient";

export default function ApiProvider({ children }) {
  const api = new MicroblogApiClient();
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}
