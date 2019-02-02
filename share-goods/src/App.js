import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import GoodsItems from './components/GoodsItems/GoodsItems';
import firebase from './components/GoodsItems/firebase';

class App extends Component {
  render() {
    const firebase = {

    }

    return (
      <div className="App">
       <Header />
       <Title title="What you need"/>
       <ul>
         <li className = "GoodsItemsList"><GoodsItems /></li>
         <span><firebase /></span><br/>

       </ul>
      </div>

    );
  }
}


export default App;
