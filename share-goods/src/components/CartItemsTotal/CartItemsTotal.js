import React from 'react'
import classes from './CartItemsTotal.module.css'


const cartItemsTotal = (props) => {
    const getdata = [];
    const dataPrice = [];
    // console.log(props.value.length);

    for (let i = 0; i < props.value.length; i++) {

      if (props.value.length > 0) {
        var itemPriceTotal=[];

        getdata.push(props.value[i].price)
        dataPrice.push(props.value[i].price)
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        // console.log(addTotal)
        // console.log(dataPrice.reduce(reducer))
        itemPriceTotal.push(dataPrice.reduce(reducer).toLocaleString());
    }

}
    /*금액누적*/
    return(
    <strong>
        <p className={classes.totalPrice}>
        합계 : {itemPriceTotal}원
        </p>
    </strong>
    
    )
}

export default cartItemsTotal;