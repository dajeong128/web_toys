import React, { Component } from 'react';
import './GoodsItems.css';
import firebase from './firebase.js'


const randomImg = ({ value, setValue }) => (
    <div>
        <img src="https://source.unsplash.com/random/?nature,water" className="itemsImg" />
        <div class="goods-items">
        <p>{firebase}</p>
        </div>
    </div>
)


export default randomImg
