import React, { Component } from 'react'

const cartDatas = []
const cartData =[]
cartDatas.push(cartData)


 

class CartList extends Component {

    state = {}

    componentDidMount() {
     this._getCartListData();   
    }


    _getCartListData = async () => {
        const cartList = await this._callAPI()
        this.setState({
            cartList
        })
    }

    _callAPI = () => {
        fetch('https://goods-204a7.firebaseio.com/cart.json')
        .then(res => res.json())
        .then(json => cartData.push(json))
        .catch(err => console.log(err))
    }

    _renderCartList = () => {
        const cartList = this.state.filter(cartData => {
            return <CartList name={cartData.name} options={cartData.options} price={cartData.price} shippingPrice={this.state.shippingPrice} />
        })
        return cartList
    }

    render() {
        return (
            <div>     
                {this.cartData ? this._renderCartList() : console.log('err')}
            </div>
        )
    }

}
console.log(cartDatas)


export default CartList