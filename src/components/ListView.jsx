import React from "react";
import ShopItem from './ShopItem';


export default function ListView(props) {
    let { products } = props;

    return (
        <div className="ListView">
            <ShopItem products={products} />
        </div>
    )
}