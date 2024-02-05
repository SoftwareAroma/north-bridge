import Link from 'next/link';
import React from 'react';
import WishListIcon from './WishListIcon';
import RatingStarIcon from './RatingStart';

const ProductCard = (props: any) => {
    const { image, name, price, rating, currency, description, isExt } = props;
    return (
        <React.Fragment>
            <div className="product-single-item swiper-slide">
                <div className="product-thumbnail-wrap cursor-off">
                    <img
                        src={image}
                        loading="lazy"
                        alt="product image"
                        className="deal-image"
                    />
                    <div className="product-wishlist">
                        <WishListIcon />
                    </div>
                </div>
                <div className="product-content">
                    <div className="product-title-wrap">
                        <h3 className="product-title">{name}</h3>
                        <div className="product-price">
                            <span className="text-span">{currency ?? "GH¢"}</span>
                            {price}
                            <span className="text-span">{isExt ? ".00" : ""}</span>
                        </div>
                    </div>
                    <div className="product-color">{description}</div>
                    <div className="product-rating mb-15">
                        <div className="star-wrap">
                            <RatingStarIcon />
                            <RatingStarIcon />
                            <RatingStarIcon />
                            <RatingStarIcon />
                            <RatingStarIcon />
                        </div>
                        <div className="total-rating">({rating})</div>
                    </div>
                    <div className="is-magnetic">
                        <div className="btn-wrapper">
                            <Link href="#" className="primary-button border cart-button w-inline-block">
                                <div className="button-content">
                                    <div className="button-color color-black">Add to Cart</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCard;