import React from "react";
import "./shopCategory.css";
import products from "../../Assets/all_product";
import Item from "../../componants/item";
import CategoryAd from "../../componants/categoryAd";
import men from "../../Assets/banner_mens.png";
import kids from "../../Assets/banner_kids.png";
import women from "../../Assets/banner_women.png";
import FooterShop from "../../componants/Footer";

function ShopCategory(props) {
    return (
        <div className="ShopCategory">
            <CategoryAd
                menimg={men}
                kidsimg={kids}
                womenimg={women}
                category={props.category}
            />
            <div className="showing">
                <div className="left">showing 1-12 out of products </div>
                <div className="right">
                    <label for="cars">Sort by:</label>
                    <select name="cars" id="cars">
                        <option value=""></option>
                        <option value=""> price </option>
                        <option value="">time</option>
                        <option value="">Audi</option>
                    </select>
                </div>
            </div>

            <div className="items">
                {products.map((item) => {
                    if (item.category == props.category) {
                        return (
                            <Item
                                img={item.image}
                                info={item.name}
                                newPrice={item.new_price}
                                oldPrice={item.old_price}
                            />
                        );
                    }
                })}
            </div>
            <div className="showMoreButton"> <button className='button_link'>Explore more </button></div>
            <FooterShop />
        </div>
    );
}

export default ShopCategory;
