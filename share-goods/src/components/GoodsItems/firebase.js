import React, { Component } from 'react';
import axios from 'axios'


const instance = axios.create({
  baseURL: 'https://goods-204a7.firebaseio.com/'
})


class firebase extends React.Component {
  render() {
    const firebase = (props) => {
      instance.get('goods.json')
      .then(res => {
        const firebaseData = res.data
        const items = []
        const options = []
        const goodsItem = firebaseData[0].options

        return (
          options.push(`
          <option value="${Object.keys(optionList).indexOf(id)}">
            ${optionList.this.color} ${optionList.this.size} ${optionList.this.stock}
          </option>
          `)

          items.push(`
            <li>
            <p className="goods-name">${data[key].name}</p>
            <select>
            ${options.join('')};
            </select>
            <p className="goods-seller">${data[key].provider}</p>
            <p className="goods-price">${data[key].price.toLocaleString()}원</p>
            <span className="goods-shippingPrice"> +배송료 ${data[key].shipping.price.toLocaleString()}원</span>
            <i className="fas fa-cart-plus" style="float:right; cursor:pointer;" onclick="keepInCart(event, ${Object.keys(data).indexOf(key)})"></i>
            </li>
          `)
          items.join('');
        }

      .catch(function (error) {
        console.log(error);
      })
    }
  }
}

export default firebase