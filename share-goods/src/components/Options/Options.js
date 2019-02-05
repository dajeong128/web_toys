import React, { Component } from 'react';
import Option from '../../Option/Otion'

const options = (props) => {

    return (
    <p>
        {
            props.products.map(product => 
            <Option
                options = {this.state.options}
            />)
        }
    </p>
  )
}

export default options;