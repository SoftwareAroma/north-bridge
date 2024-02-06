import React from 'react'
import DiscountCard from './DiscountCard';

const DiscountArea = () => {
    return (
        <React.Fragment>
            <section className="get-discount-area">
                <div data-w-id="cb46fdfc-2716-1a49-213a-f4027002cbce" className="container">
                    <div className="section-title-wrap">
                        <h3
                            className="section-title mb-40">Get Up to 70% off</h3>
                    </div>
                    <div className="get-discount-item-wrap">
                        <DiscountCard
                            description="Explore Our Furniture &amp; Home Furnishing Range"
                            amount={100}
                            currency="$"
                            image={"/images/sofa-min.png"}
                        />

                        <DiscountCard
                            description="Explore Our Furniture &amp; Home Furnishing Range"
                            amount={29}
                            currency="$"
                            image={"/images/book-min.png"}
                        />

                        <DiscountCard
                            description="Explore Our Furniture &amp; Home Furnishing Range"
                            amount={67}
                            currency="$"
                            image={"/images/shirt-min.png"}
                        />

                        <DiscountCard
                            description="Explore Our Furniture &amp; Home Furnishing Range"
                            amount={59}
                            currency="$"
                            image={"/images/bug-book-min.png"}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default DiscountArea;