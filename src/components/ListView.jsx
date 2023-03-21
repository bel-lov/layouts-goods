import React from "react";
import ShopItem from './ShopItem';


export default function ListView(props) {
    let { products } = props;

    return (
        <div className="ListView">
            {products.map(item =>
                <ShopItem name={item.name} color={item.color} img={item.img} price={item.price} />
            )}
        </div>
    )
}