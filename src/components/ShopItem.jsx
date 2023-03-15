import React from "react";

export default function ShopItem({ name, price, color, img }) {
    return (
        <div className="shopItem-item">
            <img className="img-item" src={img} alt={name} />
            <h2 className="item-title">{name}</h2>
            <div className="card-color">{color}</div>
            <p className="item-price">${price}</p>
            <button className="item-btn">add to cart</button>
        </div>
    )
}