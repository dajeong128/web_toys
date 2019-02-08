import React, { Component } from 'react';

import ProductControls from '../../components/Product/ProductControls/ProductControls';
// import OptionData from '../../components/Option/OptionData/OptionData'
import axios from '../../axios';



class ProductList extends Component {
  state = {
    name: 'test',
    products: [],
    options: []
  }

  async componentDidMount() {
    const { data } = await axios.get('/goods.json');
    // this.state.products = data;
    // this.setState(prevState => ({
    //   products: [...prevState.products, ...data]
    // }));
    this.setState({
      products: data,
    });
    // console.log(data);
  }

  render() {
    return (
      <div>
        <ProductControls products={this.state.products} />
      </div>
    )
  }
}

export default ProductList;