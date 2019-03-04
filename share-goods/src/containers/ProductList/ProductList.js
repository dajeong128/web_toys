import React, { Component } from 'react';

import ProductControls from '../../components/Product/ProductControls/ProductControls';
// import OptionData from '../../components/Option/OptionData/OptionData'
import axios from '../../axios';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Title from '../../components/Title/Title';


class ProductList extends Component {
  state = {
    name: 'test',
    products: [],
  }

 addToCart = (data) => {
  data.options = typeof data.options === 'object' ? 
  `${data.options.color} ${data.options.size}`: 
  data.options;
  data.quantity = 1;
  
   axios.post('cart.json', data)
    .then(res => {
      this.createNotification('success');
      console.log(res);
    })
    .catch (err => {console.error(err)})
 }
  createNotification = (type) => {

      console.log('createNotification...')
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      default: break;
    };
  };

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
        <Title title="What you need"/>
        <ProductControls 
        products={this.state.products}
        addToCart={this.addToCart} />
        <NotificationContainer/>
      </div>
    )
  }
}

export default ProductList;