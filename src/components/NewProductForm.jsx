import React from 'react'
import { useData } from '../context/InventoryContext'
import { useState } from 'react'

const NewProductForm = ({setShowForm}) => {
    const {inventoryInfo} = useData()
    const departments = [...new Set(inventoryInfo?.map(({department}) => department))]
    
    const [newProduct, setNewProduct] = useState({

    });

  return (
    <form className='form'>
        <section>
            <h3>add new product</h3>
            <button onClick={(e) => {
                e.stopPropagation();
                setShowForm(false)
            }}>X</button>
        </section>
        <label htmlFor="">
            department
            <select name="" id="">
                {departments?.map((department, index) => <option key={index} value={department}>{department}</option> )}
            </select>
        </label>

        <label htmlFor="">
            name
            <input type="text" />
        </label>
        
        <label htmlFor="">
            description
            <input type="text" />
        </label>
        
        <label htmlFor="">
            price
            <input type="text" />
        </label>
        
        <label htmlFor="">
            stock
            <input type="text" />
        </label>
        
        <label htmlFor="">
            SKU
            <input type="text" />
        </label>
        
        <label htmlFor="">
            supplier
            <input type="text" />
        </label>
        
        <label htmlFor="">
            delivered
            <input type="text" />
        </label>
        
        <label htmlFor="">
            image url
            <input type="text" />
        </label>

        <input type="submit" value={"add product"}/>
    </form>
  )
}

export default NewProductForm