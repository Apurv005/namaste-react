import { createContext } from "react";

const userContext = createContext({
  name: "Default name",
});

export default userContext;
