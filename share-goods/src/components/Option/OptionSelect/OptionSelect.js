import React from 'react'
import classes from './OptionSelect.module.css'
 // import classes from '../../../components/Product/ProductControl/ProductControl.module.css'

// import optionInput from './OptionInput';



const OptionSelect = (props) => {
    console.log(props)
    return (

        <select className={classes.Option}>
            {
                props.options.map(props =>
                    
                        <option>
                        {props.color} {props.size} {props.stock}
                        </option>
                )
            }
        </select>
    )
}


export default OptionSelect