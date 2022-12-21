import { useState } from "react";
import { PropsWithChildren } from "react";
import { createContext } from "react";

const ProdContext = createContext<any>({});

export const ProdContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isProdDetail, setIsProdDerail] = useState(false);
  return (
    <ProdContext.Provider value={{ isProdDetail, setIsProdDerail }}>
      {children}
    </ProdContext.Provider>
  );
};
 

export const useProdContext = () => {
    return (  );
}
 
export default useProdContext;
