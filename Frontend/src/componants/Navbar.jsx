import React, { useState, useEffect } from 'react';
import logo from "../Assets/logo.png"
import cart from "../Assets/cart_icon.png"
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"


function Navbar() {
    console.log(useLocation())

    const [opened, setOpened] = useState("");
    let path = useLocation().pathname;

    

    // if (useLocation().pathname == '/men') {
    //     setOpened("men")
    // }else if (useLocation().pathname == '/women'){
    //     setOpened("women")
    // }else if (useLocation().pathname == '/kids'){
    //     setOpened("kids")
    // }else{
    //     setOpened("shop")
    // }

    useEffect(() => {
        if (path == '/men') {
            setOpened("men")
        }else if (path == '/women'){
            setOpened("women")
        }else if (path == '/kids'){
            setOpened("kids")
        }else{
            setOpened("shop")
        }

    }),[opened];
    

    return (
        <div className='Navbar'>
            <a href="#" className='logo'>
                <img src={logo} alt="" srcset="" /> <span>Ninja</span>
            </a>
            <div className="links">
                {opened == "shop" ? <Link to="/" className='opened'>shop </Link> : <Link to="/" onClick={() => { setOpened("shop") }}> shop </Link>}
                {opened == "men" ? <Link to="/men" className='opened'>men </Link> : <Link to="men" onClick={() => { setOpened("men") }} >men </Link>}
                {opened == "women" ? <Link to="women" className='opened'>women </Link> : <Link to="women" onClick={() => { setOpened("women") }}>women </Link>}
                {opened == "kids" ? <Link to="kids" className='opened'>kids </Link> : <Link to="kids" onClick={() => { setOpened("kids") }} >kids </Link>}
            </div>
            <div className="buttons">
                <button>Login</button>
                <a href="#" > <span className='true'>0</span> <img src={cart} alt="" /></a>
            </div>
        </div>
    );
}

export default Navbar;
