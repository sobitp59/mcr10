import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { useData } from '../context/InventoryContext'

const Departments = () => {
    const {inventoryInfo, filterByDepartment} = useData()
    const departments = [...new Set(inventoryInfo?.map(({department}) => department))]
  return (
    <div  className='department'>
        <h1>departments</h1>
        <section className='department__lists'>
            {departments?.map((department, index) => (
                <Link to={"/products"} key={index} onClick={()=> filterByDepartment(department)}>
                    <strong>{department}</strong>
                </Link>
            ))}
        </section>
    </div>
  )
}

export default Departments