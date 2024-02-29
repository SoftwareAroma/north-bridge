import React from 'react'

const BestSellingStoreCard = (props: any) => {

    const {
        image,
        thumbnail,
        title,
        categories,
        tagline,
    } = props;
    return (
        <React.Fragment>
            <div className="best-selling-single-item">
                <div className="best-selling-thumbnail-wrap">
                    <img
                        src={image}
                        loading="lazy"
                        alt=""
                        className="best-selling-image"
                    />
                </div>
                <div className="best-selling-content">
                    <div className="store-thumbnail-wrap">
                        <img
                            src={thumbnail}
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <h3 className="selling-store-title">{title}</h3>
                    <div className="selling-category-wrap">
                        {
                            categories.map((category: any, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div className="selliing-category">{category?.name}</div>
                                        <div className="dot"></div>
                                    </React.Fragment>
                                );
                            })
                        }
                    </div>
                    <div className="selling-paragraph-wrap">
                        <img
                            src="/images/Icon.png"
                            loading="lazy"
                            alt=""
                            className="image"
                        />
                        <div className="trending-product-paragraph-two">
                            {tagline}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BestSellingStoreCard
