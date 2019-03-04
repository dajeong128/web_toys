import React from 'react'
import classes from './CartItems.module.css'
import Input from '../UI/Input/Input'
import { FaTrashAlt } from 'react-icons/fa';
import CartItemsTotal from '../CartItemsTotal/CartItemsTotal'

    const cartItems = (props) => {
        console.log(props)

        let elementConfig = {
            type : 'number',
            defaultValue: '1',
            min: '0',
            max: '100',
        }


    let itemList = [];
    let cartItem;
    let totalPrice = 0;

    if (props.items) {
        const items = {...props.items};

        for (let key in items) {
            items[key].key = key;
            itemList.push(items[key]);
        }

        
        cartItem = itemList.map((item, i) => {
            totalPrice += item.price * item.quantity + item.shippingPrice;
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
                            // value='0'
                            style={classes.Amount}
                            changed={(e) => props.updateItemQuantity(e, item.key)}
                            // onChange={this.handle.bind(this)}
                            />
                        <FaTrashAlt onClick={() => props.deleteItems(item.key, item.id)}/>
                    </div>
                </div>
            )
        })
        // console.log(elementConfig.value)
    return (
        <>
            {cartItem}
            {/* <CartItemsTotal /> */}
            {/* <CartItemsTotal value={itemList} inputValue={elementConfig}/> */}
            { totalPrice.toLocaleString() }
            {/* <CartItemsTotal totalPrice={totalPrice}/> */}

        </>
    )
    }  
}


export default cartItems