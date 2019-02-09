import React, { Component } from 'react';
import './App.css';
import ProductList from './containers/ProductList/ProductList';
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom'
import Cart from './containers/Cart/Cart'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Layout> 
      </div>

    );
  }
}


export default App;
