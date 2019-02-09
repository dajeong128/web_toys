import React, { Component } from 'react'
import axios from '../../axios';


class CartList extends Component {
    async componentDidMount() {
        const { data } = await axios.get('/goods.json');
        // this.state.products = data;
        // this.setState(prevState => ({
        //   products: [...prevState.products, ...data]
        // }));
        this.setState({
          products: data,
        });
        console.log(data);
      }
}

export default CartList