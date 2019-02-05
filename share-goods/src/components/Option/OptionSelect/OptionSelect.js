import React from 'react'
// import optionInput from './OptionInput';

const options = (props) => {

    return (
    <p>
        {
            props.products.map(product => 
            <div>
                key={product.id}
                id ={product.id}
                options = {product.options}
            </div>
            )
        }
    </p>
  )
}

const option = (props) => {
    return (
        <select>
            {props.option.color} {props.option.size} {props.option.stock}
        </select>
    )
}

export default option;