import React from 'react'
import classes from './CartItems.module.css'
import Input from '../UI/Input/Input'
import { FaTrashAlt } from 'react-icons/fa';


const cartItems = (props) => {
    let elementConfig = {
        type : 'number',
        min: '0',
        max: '100',
    }

    let cartItem;
    if (props.items) {
        const items = {...props.items};
        let itemList = [];
        for (let key in items) {
            items[key].key = key;
            itemList.push(items[key]);
        }
        cartItem = itemList.map((item, i) => {
            return (
                <div className={classes.cartItemsList} key={i}>
                    <div>
                        <p>상품명 : {item.name}</p>
                        <p>옵션 : {item.options}</p>
                        <p>가격 : {item.price.toLocaleString()}원
                           <span>+배송료 {item.shippingPrice.toLocaleString()} 원</span>
                        </p>
                    </div>
                    <div>
                        <Input 
                            elementType='input'
                            elementConfig={elementConfig}
                            value='0'
                            style={classes.Amount}/>
                        <FaTrashAlt onClick={() => props.deleteItems(item.key, item.id)}/>
                    </div>
                </div>
            )
        })
    }
    
    return (
        <>
            {cartItem}    
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