import React from "react";
import { createContext } from "react";

const ProdContext = React.createContext();
const ProdProvider = ProdContext.Provider;
const ProdConsumer = ProdContext.Consumer;

export { ProdConsumer, ProdProvider };
