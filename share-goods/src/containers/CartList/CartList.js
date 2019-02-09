import React, { Component } from 'react'
// import axios from '../../axios';


// const instance = axios.create ({
//     baseURL : 'https://goods-204a7.firebaseio.com/goods.json'
// })


class CartList extends Component {

    state = {}

    componentDidMount() {
        fetch('https://goods-204a7.firebaseio.com/cart.json')
            // .then(response => response.json)
            .then(res => res.json())
            .then(json => console.log(json))
            // .then(json => {
            //     this.setState ({
            //         addToCart: json
            //     })
            // })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                {
                this.state.map(this.state =>
                    <div>
                        <h4>{this.state.name}</h4>
                        <p>{this.state.options}</p>
                        <p>{this.state.price}원</p>
                        <p>+{this.state.shippingPrice}원</p>
                    </div>
                )
                }
            </div>
        )
    }

}


// const OptionSelect = (props) => {
//     console.log(props)
//     return (

//         <select className={classes.Option}>
//             {
//                 props.options.map(props =>

//                         <option>
//                         {props.color} {props.size} {props.stock}
//                         </option>
//                 )
//             }
//         </select>
//     )
// }



export default CartList