import { useState } from "react";
import { useContext } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";

const ProdContext = createContext<any>({});

export const ProdContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [isProdDetail, setIsProdDetail] = useState(false);
  return (
    <ProdContext.Provider value={{ isProdDetail, setIsProdDetail }}>
      {children}
    </ProdContext.Provider>
  );
};

export const useProdContext = () => {
  return useContext(ProdContext);
};
