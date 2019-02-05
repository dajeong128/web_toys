import React from 'react';
import classes from './ProductControls.module.css'
import ProductControl from '../ProductControl/ProductControl'

const productControls = (props) => {

    return (
    <ul className={classes.ProductWrapper}>
        {
            props.products.map(product => 
            <ProductControl
                key={product.id}
                id ={product.id}
                name = {product.name}
                options = {product.options}
                price = {product.price}
                provider = {product.provider}
                shipping = {product.shipping}
            />)
        }
    </ul>
  )
}

export default productControls;