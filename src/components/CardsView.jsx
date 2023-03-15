import React from "react";
import ShopCard from './ShopCard';

export default function CardsView(props) {
    let { products } = props;

    return (
        <div className="CardsView">
            <ShopCard products={products} />
        </div>
    )
}
