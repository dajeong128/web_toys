import React from 'react'
// import classes from '../../Product/ProductControls.module.css'

// import optionInput from './OptionInput';


const OptionSlect = (props) => {
    return (
        <select>
            {props.options.color} {props.options.size} {props.options.stock}
        </select>
    )
}


export default OptionSlect