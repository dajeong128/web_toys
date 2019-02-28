import React from 'react'
import classes from './CartItemsTotal.module.css'
import input from '../UI/Input/Input';

const cartItemsTotal = (props) => {
    const itemPrice = [];
    const items = props.value.length;

    const itemsPriceXquatity = [];

    for (let i = 0; i < items; i++) {
      if (items > 0) {
        var itemPriceTotal=[];
        itemPrice.push(props.value[i].price)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        itemPriceTotal.push(itemPrice.reduce(reducer).toLocaleString());

        itemsPriceXquatity.push((props.value[i].price) *  input.value)
    }
}
    /*금액누적*/
    return(
        <div className={classes.totalPricePlace}>
            <strong className={classes.totalPrice}>
                합계 : {itemPriceTotal}원
            </strong>
        </div>
    )
}

export default cartItemsTotal;