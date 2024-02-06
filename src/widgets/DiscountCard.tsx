import React from 'react';

type DiscountCardProps = {
    description: string;
    amount: number;
    currency: string;
    image: any;
}

const DiscountCard = (props: DiscountCardProps) => {
    const { description, amount, currency, image } = props;
    return (
        <React.Fragment>
            <div className="get-discount-single-item misty-rose">
                <div className="get-discount-content">
                    <h3 className="discount-title">Save</h3>
                    <div className="discount-price mb-20 red-rose">
                        <span className="text-span-2">
                            {currency}
                        </span>
                        {amount}
                    </div>
                    <div className="discount-paragraph">{description}</div>
                </div>
                <div className="get-discount-thumbnail-wrap">
                    <img
                        src={image}
                        loading="lazy"
                        alt=""
                        className="discount-image deal-image"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default DiscountCard;