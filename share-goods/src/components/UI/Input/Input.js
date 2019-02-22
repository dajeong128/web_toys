import React from 'react'
import classes from './Input.module.css'

const input = (props) => {
    switch (props.elementType) { 
        case 'input' :
            return (
                <input 
                    className={props.style}
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

        case 'form' : 
            return (
                <form className={classes.formInput}>
                    <input type="text" placeholder="Your Name" ></input>
                    <input type="text" placeholder="Street"></input>
                    <input type="text" placeholder="ZIP Code"></input>
                    <input type="text" placeholder="Country"></input>
                    <input type="text" placeholder="Your Email"></input>
                </form>
            )
        default: break;
    }
}

export default input;