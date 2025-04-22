import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from "../../Assets/all_product";
import "./product.css";

const Product = () => {
    const {id} = useParams()
    let item = {}

    all_product.map((e)=>{
        if (e.id == id){
            item = e;
            // console.log(item)
        }
    })

    return (
        <div className='product'>
            <div className="tree">
                home &gt; shop &gt; {item.category} &gt; {item.name}
            </div>
            <div className="main">
                <div className="left">
                    <div className="small">
                    <img src={item.image} alt="" srcset="" />
                    <img src={item.image} alt="" srcset="" />
                    <img src={item.image} alt="" srcset="" />
                    <img src={item.image} alt="" srcset="" />
                    </div>
                    <div className="big">
                    <img src={item.image} alt="" srcset="" />
                    </div>
                </div>
                <div className="right">
                    <h3>{item.name}</h3>
                    <div className="stars">

                    </div>
                    <div className="price">
                        <span className='old'> ${item.old_price}</span>
                        &nbsp;&nbsp;
                        <span className='new'>${item.new_price}</span>
                        
                    </div>
                    <p>
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                    </p>
                    <div className="size">
                        <h4>select size </h4>
                        <span>s</span>
                        <span>m</span>
                        <span>l</span>
                        <span>xl</span>
                        <span>xxl</span>
                    </div>
                    <button className="addtocart">
                        add to cart 
                    </button>
                    <div className="details">
                        <h5>category: <span> {item.category}</span></h5>
                        <h5>tags: <span>modern, latest </span></h5>

                    </div>

                </div>
            </div>
            
        </div>
    );
}

export default Product;
