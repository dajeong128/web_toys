import React from 'react';
import './Title.css'

const title = (props) => {
    return (
        <h1 className="title" style={{textAlign:'center'}}>{props.title}</h1>
    )
}

export default title;