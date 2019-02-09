import React, {Component} from 'react'
import Title from '../../components/Title/Title'
import CartList from '../CartList/CartList'

class Cart extends Component {
    render (){
        return (
            <div>
                <Title title="We hope your good shopping!"/>
                <CartList />
            </div>
        
        )
    }
}

export default Cart