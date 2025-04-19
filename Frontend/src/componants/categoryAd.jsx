import React from 'react';
import "./CategoryAd.css";

function CategoryAd(props){

    return (
    <div className="container" >
    {/* <img src={props.menimg} alt="" srcset="" /> */}
    {props.category == "men" ? <img src={props.menimg} alt="" srcset="" />:""}
    {props.category == "women" ? <img src={props.womenimg} alt="" srcset="" />:""}
    {props.category == "kid" ? <img src={props.kidsimg} alt="" srcset="" />:""}
    </div>
)};

export default CategoryAd;