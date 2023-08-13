import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { inventoryData } from "../inventoryDB";
const InventoryContext = createContext();

export const InventoryContextProvider = ({children}) => {
    const [inventoryInfo, setInventoryInfo] = useState(inventoryData)
    const [productDepartment, setProductDepartment] = useState('') 
    const navigate = useLocation();
    
    const filterByDepartment = (department) => {
        setProductDepartment(department)
    }

    const values = {
        inventoryInfo : inventoryInfo,
        productDepartment : productDepartment,
        filterByDepartment
    };

    return(
        <InventoryContext.Provider value={values}>
            {children}
        </InventoryContext.Provider>
    )
}

export const useData = () => useContext(InventoryContext)

