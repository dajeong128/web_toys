import React, { Component } from 'react'
// import optionInput from './OptionInput';


class optionSelect extends Component {
    render() {
        return (
            <select>
                <option>
                {this.props.option.color} {this.props.option.size} {this.props.option.stock}
                </option>
            </select>
        )
    }
}

export default optionSelect;