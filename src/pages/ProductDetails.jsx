import React from 'react';
import { useParams } from 'react-router-dom';
import { useData } from '../context/InventoryContext';

const ProductDetails = () => {
    const {productID} = useParams();
    const {inventoryInfo} = useData();

    const product = inventoryInfo?.filter(({id}) => id === productID)
    const [{name, department, description, price, stock, sku, supplier, delivered, imageUrl} = {}] = product;   
    
    
    return (
    <div className='productDetails'>
        <h2>{name}</h2>
        <img src={imageUrl} alt="" />
        <p>
            <strong>price : </strong> {price}
        </p>
        <p>
            <strong>stock : </strong> {stock}
        </p>
        <p>
            <strong>SKU : </strong> {sku}
        </p>
        <p>
            <strong>supplier : </strong> {supplier}
        </p>
        <p>
            <strong>delivered : </strong> {delivered}
        </p>
        <p>
            <strong>department : </strong> {department}
        </p>
        <p>
            <strong>description : </strong> {description}
        </p>
    </div>
  )
}

export default ProductDetails