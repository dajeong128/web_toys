import React, { Component } from 'react'
// import axios from '../../axios';


// const instance = axios.create ({
//     baseURL : 'https://goods-204a7.firebaseio.com/goods.json'
// })


class CartList extends Component {

    state = {}

    componentDidMount() {
     this._getCartListData();   
    }

    _renderCartList = () => {
        const cartList = this.state.map(index => {
            return <CartList name={index.name} options={index.options} price={index.price} shippingPrice={index.shippingPrice} />
        })
        return cartList
    }
    _getCartListData = async () => {
        const cartList = await this._callAPI()
        this.setState({
            cartList
        })
    }

    _callAPI = () => {
        fetch('https://goods-204a7.firebaseio.com/cart.json')
        // .then(response => response.json)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                
                {this.state.cartList ? this._renderCartList() : 'err'}
            </div>
        )
    }

}


// const OptionSelect = (props) => {
//     console.log(props)
//     return (

//         <select className={classes.Option}>
//             {
//                 props.options.map(props =>

//                         <option>
//                         {props.color} {props.size} {props.stock}
//                         </option>
//                 )
//             }
//         </select>
//     )
// }



export default CartList