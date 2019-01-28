import React, { Component } from 'react';
import './App.css';


import Header from './components/Header/Header';
import Title from './components/Title/Title';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Title title="What you need"/>
       <ul>
         <li></li>
       </ul>
      </div>
    );
  }
}

export default App;
