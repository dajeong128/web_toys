import React from 'react';
import logo from '../../logo.svg';
import './Header.css'
import {NavLink} from 'react-router-dom'


const header = () => {
    return (
        <header>
            <img src={logo} className="logo" alt="logo" />
            <div className="navigation-items">
                <ul>
                    <li>
                    <NavLink to="/">
                        상품목록
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/cart">
                        장바구니
                    </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default header;