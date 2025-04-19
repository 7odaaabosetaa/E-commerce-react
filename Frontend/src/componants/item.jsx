import React from 'react';
import "./item.css"



function  Item(props){
    return (
        <div className='item'>
            <img src={props.img} alt="" srcset="" />
            <div className="text">
            <p className='info'> {props.info}</p>
            <span className='new_price'> ${props.newPrice}  </span>
            <span className='old_price'> ${props.oldPrice}  </span>
            </div>
        </div>
    );
};
export default Item;
