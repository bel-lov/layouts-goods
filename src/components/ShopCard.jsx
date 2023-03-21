import React from "react";

export default function ShopCard({ name, price, color, img }) {
    return (
        <div className="card">
            <h2 className="title">{name}</h2>
            <div className="card-color">{color}</div>
            <img className="img" src={img} alt={name} />
            <div className="container-card">
                <p className="card-price">${price}</p>
                <button className="card-btn">add to cart</button>
            </div>
        </div>
    )
}