import React from 'react'
import classes from './ProductControl.module.css'
import { FaCartPlus } from 'react-icons/fa';
import Image from '../../UI/Image/Image'
import OptionInput from '../../Option/OptionInput/OptionInput'
// import OptionSelector from '../../Option/OptionSelector/OptionSelector'


// import Option from '../../Option/Option'


const productControl = (props) => {
    return (
        <li className={classes.ProductList}>
        <Image 
        src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350" 
        alt="상품"
        effect = "blur"
        />
        <p><strong>{props.name}</strong></p>
        <OptionInput />
        <p>{props.provider}</p>
        <div className={classes.Pricebox}>
          <p>{props.price}</p>
        <FaCartPlus />
        </div>
        <p>{props.shipping.price}</p>
      </li>
    )
}

export default productControl