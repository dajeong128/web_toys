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
          return (
            const options = []
            const goodsItem = firebaseData[0].options

            options.push(`
            <option value="${Object.keys(optionList).indexOf(id)}">
              ${optionList.this.color} ${optionList.this.size} ${optionList.this.stock}
            </option>
            `)

            items.push(`
              <li>
              <p class="goods-name">${data[key].name}</p>
              <select>
              ${options.join('')};
              </select>
              <p class="goods-seller">${data[key].provider}</p>
              <p class="goods-price">${data[key].price.toLocaleString()}원</p>
              <span class="goods-shippingPrice"> +배송료 ${data[key].shipping.price.toLocaleString()}원</span>
              <i class="fas fa-cart-plus" style="float:right; cursor:pointer;" onclick="keepInCart(event, ${Object.keys(data).indexOf(key)})"></i>
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