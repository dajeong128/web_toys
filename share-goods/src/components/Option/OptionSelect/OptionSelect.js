import React from 'react'


// import optionInput from './OptionInput';


const OptionSlect = (props) => {
    console.log(props)

    return (
        <select>
            {props.options.color} {props.option.size} {props.options.stock}
        </select>
    )
}

export default OptionSlect