import React from 'react';
import logo from '../../logo.svg';
import './Header.css'


const header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <div className="navigation-items">
                <ul>
                    <li>상품목록</li>
                    <li>장바구니</li>
                </ul>
            </div>
        </header>
    )
}

export default header;