import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import ProductList from './containers/ProductList/ProductList';


class App extends Component {
  render() {

    return (
      <div className="App">
       <Header />
       <Title title="What you need"/>
       <ProductList />
      </div>

    );
  }
}


export default App;
