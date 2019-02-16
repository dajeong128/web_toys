import React from 'react'
import classes from './Input.module.css'

const input = (props) => {
    switch (props.elementType) {
         
        case 'input' :
            return (
                <input 
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            )
        case 'select' :
            return (
                <select
                    className={classes.Select}
                    {...props.elementConfig}
                    onChange={props.changed} >
                    {props.options.map(option => {
                        return (
                            <option key={option.id} value={`${option.color} ${option.size}`} disabled={!option.stock}>
                                {option.color} {option.size} {option.stock}
                            </option>
                        )
                    })
                    }
                </select>
            )
        default: break;
    }
}

export default input;