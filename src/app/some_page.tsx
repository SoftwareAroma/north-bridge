import React, { useState } from "react";
import Link from 'next/link';

const ProductPage = () => {
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Add item to cart
    };

    return (
        <div className="product-page">
            <div className="product-header">
                <div className="product-title">AirPods Max</div>
                <div className="product-price">$549.00</div>
            </div>
            <div className="product-image">
                <img src="/images/airpods-max.png" alt="AirPods Max" />
            </div>
            <div className="product-description">
                <p>
                    AirPods Max are the perfect balance of exhilarating high-fidelity audio and
                    the effortless magic of AirPods.
                </p>
            </div>
            <div className="product-colors">
                <div className="product-color">
                    <input type="radio" name="color" id="color-space-gray" />
                    <label htmlFor="color-space-gray">Space Gray</label>
                </div>
                <div className="product-color">
                    <input type="radio" name="color" id="color-silver" />
                    <label htmlFor="color-silver">Silver</label>
                </div>
                <div className="product-color">
                    <input type="radio" name="color" id="color-sky-blue" />
                    <label htmlFor="color-sky-blue">Sky Blue</label>
                </div>
                <div className="product-color">
                    <input type="radio" name="color" id="color-pink" />
                    <label htmlFor="color-pink">Pink</label>
                </div>
            </div>
            <div className="product-quantity">
                <label htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                //  onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <div className="product-actions">
                <button className="btn btn-primary" onClick={handleAddToCart}>
                    Add to Cart
                </button>
                <Link href="/cart" className="btn btn-secondary">
                    View Cart
                </Link>
            </div>
        </div>
    );
};

export default ProductPage;