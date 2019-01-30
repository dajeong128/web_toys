import React, { Component } from 'react';
import './GoodsItems.css';


const randomImg = ({ value, setValue }) => (
    <div>
        <img src="https://source.unsplash.com/random/?nature,water" className="itemsImg" />
    </div>
)

export default randomImg
