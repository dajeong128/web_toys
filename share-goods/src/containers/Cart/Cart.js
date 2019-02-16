import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import CartItems from '../../components/CartItems/CartItems'
import axios from '../../axios'


class Cart extends Component {

    state = {
        cartList : []
    }

    componentDidMount() {
        this._getCartListData();   
       }
   
       _getCartListData = async () => {
           const cartList = await this._callAPI()
           this.setState({
               cartList
           })
       }
   
       _callAPI = async () => {
            const { data} = await axios.get('/cart.json');
            return data;
        //    fetch('https://goods-204a7.firebaseio.com/cart.json')
        //    .then(res => res.json())
        //    .then(json => cartData.push(json))
        //    .catch(err => console.log(err))
       }

    render (){
        return (
            <div>
                <Title title="We hope your good shopping!"/>
                <CartItems items={this.state.cartList}/>
            </div>
        
        )
    }
}


export default Cart