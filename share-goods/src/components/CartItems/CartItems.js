import React from 'react'
import classes from './CartItems.module.css'


const cartItems = (props) => {
    console.log(props.items)
    return (
        <>
        <div className={classes.cartItemsList}>
            <p>상품명 : </p>
            <p>색깔 :  / 사이즈 :</p>
            <p>가격 : 
            <span>+배송료 원</span>
            </p>

        </div>
        </>
    )
}
   

    // _renderCartList = () => {
    //     const cartList = this.state.map(cartData => {
    //         return <CartList name={cartData.name} options={cartData.options} price={cartData.price} shippingPrice={this.state.shippingPrice} />
    //     })
    //     return cartList
    // }


export default cartItems