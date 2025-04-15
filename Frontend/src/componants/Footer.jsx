import React from 'react';
import logo from "../Assets/logo.png";
import insta from "../Assets/instagram_icon.png";
import whats from "../Assets/whatsapp_icon.png";
import linkedin from "../Assets/linkedin.png"
import "./Footer.css";
import github from "../Assets/github.png"



function FooterShop(){
    return (
        <div className='footer'>
             <div className="paddingsection ninja"><img src={logo} alt="" srcset="" /> ninja </div>
            <div className="about_links"> 
                <a href="#">company</a>
                <a href="#">products</a>
                <a href="#">offices</a>
                <a href="#">about</a>
                <a href="#">contact</a>
            </div>
            <div className="social">
                <a href="https://www.instagram.com/mahmoud.abosetaa"><img src={insta} alt="" srcset="" /></a>
                <a href="wa.me/+201029658040"><img src={whats} alt="" srcset="" /></a>
                <a href="https://www.linkedin.com/in/mahmoud-abosetaa"><img src={linkedin} alt="" srcset="" /></a>
                <a href="https://github.com/7odaaabosetaa"><img src={github} alt="" srcset="" /></a>
            </div>
            
        </div>
    );
}

export default FooterShop;
