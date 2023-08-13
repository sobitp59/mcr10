import { createContext, useContext, useState } from "react";
import { inventoryData } from "../inventoryDB";
const InventoryContext = createContext();

export const InventoryContextProvider = ({children}) => {
    const [inventoryInfo, setInventoryInfo] = useState(inventoryData)
    const [productDepartment, setProductDepartment] = useState('') 
    
    
    const filterByDepartment = (department) => {
        setProductDepartment(department)
    }

    const addProductToInventory = (e, product, setShowForm)  => {
        e?.preventDefault();
        console.log(product)
        setInventoryInfo((prev) => [product, ...prev])
        setShowForm(false);
    }

    const values = {
        inventoryInfo : inventoryInfo,
        productDepartment : productDepartment,
        filterByDepartment,
        addProductToInventory
    };

    return(
        <InventoryContext.Provider value={values}>
            {children}
        </InventoryContext.Provider>
    )
}

export const useData = () => useContext(InventoryContext)

