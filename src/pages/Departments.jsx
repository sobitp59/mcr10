import React from 'react'
import "../App.css"
import { useData } from '../context/InventoryContext'

const Departments = () => {
    const {inventoryInfo} = useData()
    const departments = [...new Set(inventoryInfo?.map(({department}) => department))]
  return (
    <div  className='department'>
        <h1>departments</h1>
        <section className='department__lists'>
            {departments?.map((department, index) => (
                <span key={index}>
                    <strong>{department}</strong>
                </span>
            ))}
        </section>
    </div>
  )
}

export default Departments