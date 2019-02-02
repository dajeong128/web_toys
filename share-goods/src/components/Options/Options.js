import React, { Component } from 'react';

class Options extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: 0
        }
    }
    
}
    return(
        <select>
        {this.props.options.map(option => (
            <option
                key={this.state.option.id}>
                {this.state.option.color} {this.state.option.size} {this.state.option.stock}
            </option>
        ))}
        </select>
    )



export default Options


// const productControls = (props) => {

//     return (
//     <ul className={classes.ProductWrapper}>
//         {
//             props.products.map(product => 
//             <ProductControl 
//                 key={product.id}
//                 id ={product.id}
//                 name = {product.name}
//                 options = {product.options}
//                 price = {product.price}
//                 provider = {product.provider}
//                 shipping = {product.shipping}
//             />)
//         }
//     </ul>
//   )
// }