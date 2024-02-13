import React from 'react';

const BrandItem = (props: any) => {
    const { image, name, deliveryDescription } = props;
    return (
        <React.Fragment>
            <div
                className="choose-brand-single-item">
                <div className="choose-brand-thumbnail-wrap">
                    <img
                        src={image} loading="lazy"
                        alt="" className="deal-image" />
                </div>
                <div className="choose-brand-content">
                    <h3 className="brand-title">{name}</h3>
                    <div className="delivery-time">{deliveryDescription}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BrandItem;