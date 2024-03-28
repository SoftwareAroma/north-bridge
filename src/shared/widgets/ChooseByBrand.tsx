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
                            image="/images/Coca-Cola-Logo.png"
                            name=""
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/New_Guinness_Ghana_Logo.png"
                            name="Guinness"
                            deliveryDescription="Delivery with in 24 hours"
                        />
                        <BrandItem
                            image="/images/FANMILK.webp"
                            name=""
                            deliveryDescription="Delivery with in 24 hours"
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ChooseByBrand;