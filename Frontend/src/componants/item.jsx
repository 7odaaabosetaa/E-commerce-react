import React from 'react';
import "./item.css"
import {Link} from "react-router-dom"



function  Item(props){
    return (
        <Link className='item' to={`/product/${props.id}`}>
            <img src={props.img} alt="" srcset="" />
            <div className="text">
            <p className='info'> {props.info}</p>
            <span className='new_price'> ${props.newPrice}  </span>
            <span className='old_price'> ${props.oldPrice}  </span>
            </div>
        </Link>
    );
};
export default Item;
