import React from 'react'
import classes from './CartItemsTotal.module.css'
import input from '../UI/Input/Input';

const cartItemsTotal = (props) => {
    // console.log(props)
    // const items = props.value.length;

    // const itemsPriceQuantity = [];

    // const itemPriceTotal=[];
    // const reducer = (accumulator, currentValue) => accumulator + currentValue;

    // for (let i = 0; i < items; i++) {
    //     if (items > 0) {
    //         const itemPrice = [];

    //         itemPrice.push(props.value[i].price)
    //         itemPrice.push(props.value[i].shippingPrice)
    //         itemPriceTotal.push(itemPrice.reduce(reducer));

    //         itemsPriceQuantity.push((props.value[i].price) *  input.value)
    //     }
    // }

    // const totalPrice = itemPriceTotal.length > 0 ? itemPriceTotal.reduce(reducer).toLocaleString() : 0;

    return(
        <div className={classes.totalPricePlace}>
            <strong className={classes.totalPrice}>
                합계 : {props.totalPrice.toLocaleString()}원
            </strong>
        </div>
    )
}

export default cartItemsTotal;