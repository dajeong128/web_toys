import React from 'react'
import Options from '../../Options/Options'


const option = (props) => {
    return (
        <select>
        {props.options.map(option => (
            <Options 
                key={state.option.id}>
                {state.option.color} {state.option.size} {state.option.stock}
            /></Options>
        ))}
    </select>
    )
}

export default option