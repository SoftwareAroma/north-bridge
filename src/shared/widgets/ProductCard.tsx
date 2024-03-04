
import React from 'react';
import WishListIcon from './WishListIcon';
import RatingStarIcon from './RatingStar';
import { Rating } from 'flowbite-react';
import { useRouter } from 'next/navigation';

const ProductCard = (props: any) => {
    const {
        id,
        category = 'category',
        image,
        name,
        price,
        rating,
        currency,
        description,
        isExt,
        isCursorOff = true,
        showShadow = false,
        onAddToCart,
    } = props;

    const router = useRouter();

    return (
        <React.Fragment>
            <div
                className={
                    `product-single-item swiper-slide bg-white dark:bg-gray-950 ${showShadow ? "shadow-md" : ""}`
                }
            >
                <div className={`product-thumbnail-wrap ${isCursorOff ? 'cursor-off' : ''}`}>
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
                <div className="product-content px-2 py-1">
                    <div onClick={() => router.push(`/products/${category}/${id}`)} className="product-title-wrap">
                        <h3 className="product-title">{name}</h3>
                        <div className="product-price">
                            <p className="text-span">{currency ?? "GH¢"}</p>
                            {price}
                            <p className="text-span">{isExt ? ".00" : ""}</p>
                        </div>
                    </div>
                    <div className="product-color">{description}</div>
                    <div className="product-rating mb-15">
                        <div className="star-wrap">
                            <Rating>
                                <RatingStarIcon />
                                <RatingStarIcon />
                                <RatingStarIcon />
                                <RatingStarIcon />
                                <RatingStarIcon filled={false} />
                            </Rating>
                        </div>
                        <div className="total-rating">({rating})</div>
                    </div>
                    <div className="is-magnetic">
                        <div className="btn-wrapper">
                            <button onClick={onAddToCart} className="primary-button border cart-button w-inline-block">
                                <div className="button-content">
                                    <div className="button-color color-black">Add to Cart</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductCard;