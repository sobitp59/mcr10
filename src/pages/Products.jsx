import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import NewProductForm from '../components/NewProductForm';
import { useData } from '../context/InventoryContext';

const Products = () => {
    const {inventoryInfo} = useData();
    const [showForm, setShowForm] = useState(false)

  return (
    <div className='products'>
        <section className='products__header'>
            <h3>products</h3>
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
            </select>
            <input type="checkbox" />
            <select name="" id="">
                <option value="">name</option>
                <option value="">price</option>
                <option value="">stock</option>
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
            {inventoryInfo?.map((product) => {
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