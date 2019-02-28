import React from 'react'


const cartItemsTotal = (props) => {
    
    console.log(props)
    
    // const cartPriceTotal = props.map((item, i) => {
        return (
          
            <div>
                <p>
                    가격 : {props.totalPrice}원
                </p>
            </div>

                  
        )
    // })
}
export default cartItemsTotal;