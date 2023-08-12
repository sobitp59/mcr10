import { createContext, useContext, useState } from "react";
import { inventoryData } from "../inventoryDB";
const InventoryContext = createContext();


export const InventoryContextProvider = ({children}) => {
    const [inventoryInfo, setInventoryInfo] = useState(inventoryData)
    
    const values = {
        inventoryInfo : inventoryInfo
    };

    return(
        <InventoryContext.Provider value={values}>
            {children}
        </InventoryContext.Provider>
    )
}

export const useData = () => useContext(InventoryContext);