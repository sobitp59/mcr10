import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NewProductForm from '../components/NewProductForm';
import { useData } from '../context/InventoryContext';

const Products = () => {
    const {inventoryInfo, productDepartment} = useData();
    const [showForm, setShowForm] = useState(false);

    const departments = [...new Set(inventoryInfo?.map(({department}) => department))]

    const [selectDepartment, setSelectDepartment] = useState(productDepartment)
    const [filterBy, setFilterBy] = useState("")
    const [checkedLowStock, setCheckedLowStock] = useState(false)

    const inventoryDatas = inventoryInfo?.filter(({department}) => department?.includes(selectDepartment)).sort((a, b) => filterBy === 'price' ? a.price - b.price : filterBy === 'stock' ? a.stock - b.stock : filterBy === 'name' && (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)).filter(({stock}) =>!checkedLowStock || stock <= 10 );

  return (
    <div className='products'>
        <section className='products__header'>
            <h3>products</h3>
            <select value={selectDepartment} onChange={(e) => setSelectDepartment(e?.target.value)}>
                <option value="">all departments</option>
                {departments?.map((department, index) => <option key={index} value={department}>{department}</option> )}
            </select>
            <label htmlFor="">
                <input type="checkbox" onChange={(e) => setCheckedLowStock(e.target.checked)} value={checkedLowStock}/>
                low stock items
            </label>
            <select name="" id="" onChange={(e) => setFilterBy(e?.target.value)}>
                <option value="name">name</option>
                <option value="price">price</option>
                <option value="stock">stock</option>
            </select>
            <button onClick={() => setShowForm(true)}>new</button>
        </section>
        
        {/* products listing */}
        <section className='products__heading'>
            <h4>image</h4>
            <h4>name</h4>
            <h4>description</h4>
            <h4>price</h4>
            <h4>stock</h4>
            <h4>supplier</h4>
        </section>
        <ul className='product__lists'>
            {inventoryDatas?.map((product) => {
                const {id, department, name, description, price, stock, sku, supplier, delivered, imageUrl} = product;

                return(
                    <Link key={id} to={`/products/${id}`}>
                        <li className='product__list'>
                            <img src={imageUrl} alt="" />
                            <h4>{name}</h4>
                            <p>{description}</p>
                            <h4>{price}</h4>
                            <h4>{stock}</h4>
                            <h4>{supplier}</h4>
                        </li>
                    </Link>
                )
            })}
        </ul>
        {showForm &&   <NewProductForm setShowForm={setShowForm}/>
}
          </div>
  )
}

export default Products