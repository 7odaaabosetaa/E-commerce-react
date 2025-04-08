import React from 'react';
import "./panar.css"

const Panar = (props) => {
    return (
        <div className="panar">
        <div className="text">
            <h3>exclusive <br/><br/> Oferrs for you</h3>
            <p>only best sellers products</p>
            <a href="#" className='button_link'>Check now</a>
      </div>
      <img src={props.img} alt="" srcset="" />
    </div>
    );
}

export default Panar;
