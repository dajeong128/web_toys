import React, { Component } from 'react';

import ProductControls from '../../components/Product/ProductControls/ProductControls';
import OptionSelect from '../../components/Option/OptionSelect/OptionSelect'
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
      options: data
    });
    console.log(data);
  }

  render() {
    return (
      <div>
        <ProductControls products={state.products} />
        <OptionSelect options={state.products}/>
      </div>
    )
  }
}

export default ProductList;