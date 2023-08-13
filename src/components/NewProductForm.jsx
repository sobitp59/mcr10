import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useData } from '../context/InventoryContext';

const NewProductForm = ({setShowForm}) => {
    const {inventoryInfo, addProductToInventory} = useData()
    const departments = [...new Set(inventoryInfo?.map(({department}) => department))]
    
    const [newProduct, setNewProduct] = useState({
        id : uuidv4(),
        name : '',
        department : '',
        description : '',
        price : 0,
        stock : 0,
        sku : '',
        supplier : '',
        delivered : 0,
        imageUrl : '' 
    });

    const onNewProductChange = (e) => {
        const {name, value} = e?.target;
        setNewProduct((prev) =>  ({...prev, [name] : value}))
    }

    console.log(newProduct)
  return (
    <form className='form' onSubmit={(e) => addProductToInventory(e, newProduct, setShowForm)}>
        <section>
            <h3>add new product</h3>
            <button onClick={(e) => {
                e.stopPropagation();
                setShowForm(false)
            }}>X</button>
        </section>
        <label htmlFor="">
            department
            <select name="department" id="" onChange={onNewProductChange}>
                {departments?.map((department, index) => <option key={index} value={department}>{department}</option> )}
            </select>
        </label>

        <label htmlFor="">
            name
            <input type="text" name='name' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            description
            <input type="text" name='description' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            price
            <input type="text" name='price' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            stock
            <input type="text" name='stock' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            SKU
            <input type="text" name='sku' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            supplier
            <input type="text" name='supplier' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            delivered
            <input type="text" name='delivered' onChange={onNewProductChange}/>
        </label>
        
        <label htmlFor="">
            image url
            <input type="text" name='imageUrl' onChange={onNewProductChange}/>
        </label>

        <input type="submit" value={"add product"}/>
    </form>
  )
}

export default NewProductForm