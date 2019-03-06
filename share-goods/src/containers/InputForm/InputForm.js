import React from 'react'
import classes from './InputForm.module.css'


const inputForm = () => {


    return (
        <form className={classes.inputForm}>
            <input className={classes.formInput} type="text" placeholder="Your Name" ></input>
            <input className={classes.formInput} type="text" placeholder="Street"></input>
            <input className={classes.formInput} type="text" placeholder="ZIP Code"></input>
            <input className={classes.formInput} type="text" placeholder="Country"></input>
            <input className={classes.formInput} type="text" placeholder="Your Email"></input>
            <button className={classes.submit} type="button">ORDER</button>
        </form>
    )
}


export default inputForm;