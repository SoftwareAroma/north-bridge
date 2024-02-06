import React from 'react'
import BrandItem from './BrandItem';

const ChooseByBrand = () => {
    return (
        <React.Fragment>
            <section className="choose-brand-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3
                            className="section-title mb-40">Choose by Brand</h3>
                    </div>
                    <div className="choose-brand-item-wrap">
                        <BrandItem
                            image="/images/brand-min (2).png"
                            name="Sprouts"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand (3)-min.png"
                            name="Staples"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand (6)-min.png"
                            name="Whole Foods"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand (5)-min.png"
                            name="Grocery outlet"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand (4)-min.png"
                            name="Sports Basement"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand (2)-min.png"
                            name="Container Store"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brandmin.png"
                            name="Target"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/brand-min.png"
                            name="Bevmo!"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ChooseByBrand;