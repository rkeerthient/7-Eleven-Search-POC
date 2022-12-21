import { PropsWithChildren } from "react";
import { createContext } from "react";

const ProdContext = createContext<any>({});
 
const ProdContextProvider = ({children}: PropsWithChildren<unknown>) => {
    return (  );
}
 
export default ProdContextProvider;