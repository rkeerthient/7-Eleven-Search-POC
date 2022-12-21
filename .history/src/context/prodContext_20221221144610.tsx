import { useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";

const ProdContext = createContext<any>({});

const ProdContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isProdDetail, setIsProdDerail] = useState(false);
};

export default ProdContextProvider;
