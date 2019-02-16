import React from 'react'
import classes from './ProductControl.module.css'
import { FaCartPlus } from 'react-icons/fa';
import Image from '../../UI/Image/Image'
// import OptionInput from '../../Option/OptionInput/OptionInput'
import Input from '../../UI/Input/Input'
// import OptionSelect from '../../Option/OptionSelect/OptionSelect'



const productControl = (props) => {
  let selectedOption;
  const updataOption = (event) => {
    selectedOption = event.target.value;
  }
    return (
        <li className={classes.ProductList}>
        <Image 
        src="https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-270,h-350" 
        alt="상품"
        effect = "blur"
        />
        <p><strong>{props.name}</strong></p>
        {/* <OptionSelect options={props.options} /> */}
        {/* <OptionInput /> */}
        <Input elementType='select' options={props.options} changed={updataOption}/>
        <p>{props.provider}</p>
        <div className={classes.Pricebox}>
          <p>{props.price.toLocaleString()}원</p>
        <FaCartPlus onClick={() => props.addToCart({
          id:props.id,
          name: props.name,
          options: (selectedOption) ? selectedOption : props.options[0],
          price: props.price,
          shippingPrice: props.shipping.price
        })}/>
        </div>
        <p className={classes.ShippingPrice}>+ 배송료{props.shipping.price.toLocaleString()}원</p>
      </li>
    )
}

export default productControl