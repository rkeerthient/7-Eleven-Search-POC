import { createContext } from "react";

const ProdContext = createContext();
const ProdProvider = ProdContext.Provider;
const ProdConsumer = ProdContext.Consumer;

export { ProdConsumer, ProdProvider };
