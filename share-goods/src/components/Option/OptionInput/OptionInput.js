
import React, { Component } from 'react'
import classes from './OptionInput.module.css'


class OptionInput extends Component {
    render() {
      return (
          <input className={classes.TextInput} placeholder="Write Option"/>
      )
    }
  }

export default OptionInput