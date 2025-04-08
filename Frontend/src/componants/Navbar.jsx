import React, { useState } from 'react';
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import "./Navbar.css"
function Navbar() {
    let [opened, setOpened] = useState("shop");
    return (
        <div className='Navbar'>
            <a href="#" className='logo'>
                <img src={logo} alt="" srcset="" /> <span>Ninja</span>
            </a>
            <div className="links">
                {opened == "shop" ? <a href="#" className='opened'>shop </a> : <a href="#" onClick={() => { setOpened("shop") }}> shop </a>}
                {opened == "men" ? <a href="#" className='opened'>men </a> : <a href="#" onClick={() => { setOpened("men") }} >men </a>}
                {opened == "women" ? <a href="#" className='opened'>women </a> : <a href="#" onClick={() => { setOpened("women") }}>women </a>}
                {opened == "kids" ? <a href="#" className='opened'>kids </a> : <a href="#" onClick={() => { setOpened("kids") }} >kids </a>}

            </div>
            <div className="buttons">
                <button>Login</button>
                <a href="#" > <span className='true'>0</span> <img src={cart} alt="" /></a>
            </div>
        </div>
    );
}

export default Navbar;
