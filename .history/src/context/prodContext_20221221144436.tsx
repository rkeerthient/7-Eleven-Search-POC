import { createContext } from "react";

const ProdContext = createContext<any>({});
const ProdProvider = ProdContext.Provider;
const ProdConsumer = ProdContext.Consumer;

export { ProdConsumer, ProdProvider };
