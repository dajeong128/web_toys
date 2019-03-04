import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import CartItems from '../../components/CartItems/CartItems'
import axios from '../../axios'
import classes from './Cart.module.css'
import Input from '../../components/UI/Input/Input'

class Cart extends Component {

    state = {
        data: 1,
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

        updateItemQuantity = (e, itemKey) => {
            this.state.data = 2;
            const cartList = { ...this.state.cartList};
            cartList[itemKey].quantity = Number(e.target.value);
            cartList[itemKey].totalPrice = cartList[itemKey].quantity * cartList[itemKey].price;
            this.setState({
                cartList
            })
            console.log(this.state.cartList);

            
            // const cartItems={};
            // const cartItemsAddQunatity;
            // cartItems.push(this.cartList)
            // for(let key in this.state.cartList) {
            //     if (this.state.cartList[key] == cartItems[key]) {
            //         cartItems.push()
            //     }
            // }
            // this.setState ({
            //     cartList
            // })
        }

        // order = async () => {
        //     await axios.post('order', this.state.cartList);
        // }


    render (){
        return (
            <div className={classes.Cart}>
                <Title title="We hope your good shopping!"/>
                <CartItems items={this.state.cartList} deleteItems={this.deleteItems} updateItemQuantity={this.updateItemQuantity}/>
                <div className={classes.formCard}>
                    <h4>Enter your Contact Data</h4>
                    <Input elementType='form' className={classes.Input}/>
                </div>
                {/* <button onClick={order}>
                    주문하기
                </button> */}
            </div>
        
        )
    }
}

export default Cart