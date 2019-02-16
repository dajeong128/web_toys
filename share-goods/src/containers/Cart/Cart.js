import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import CartItems from '../../components/CartItems/CartItems'
import axios from '../../axios'
import classes from './Cart.module.css'

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
            const { data } = await axios.get('/cart.json');
            return data;
        //    fetch('https://goods-204a7.firebaseio.com/cart.json')
        //    .then(res => res.json())
        //    .then(json => cartData.push(json))
        //    .catch(err => console.log(err))
       }

       deleteItems = async(key, id) => {
           try {
            await axios.delete(`/cart/${key}.json`);
            let cartList = {};
            for (let key in this.state.cartList) {
                if(this.state.cartList[key].id !== id) {
                    cartList[key] = this.state.cartList[key]
                }
            }
            this.setState ({
                cartList
            })
           } catch(err) {
               console.error(err)
           }
       }

    render (){
        return (
            <div className={classes.Cart}>
                <Title title="We hope your good shopping!"/>
                <CartItems items={this.state.cartList} deleteItems={this.deleteItems}/>
            </div>
        
        )
    }
}

export default Cart