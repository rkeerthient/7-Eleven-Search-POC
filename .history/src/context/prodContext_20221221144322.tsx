import { createContext } from "react";

const ProdContext = createContext();
const ProdProvider = prodContext.Provider;
const ProdConsumer = prodContext.Consumer;

export { ProdConsumer, ProdProvider };
