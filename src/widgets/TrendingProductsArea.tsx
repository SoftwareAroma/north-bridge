import React from 'react';

const TrendingProductsArea = () => {
    return (
        <React.Fragment>
            <section className="trending-product-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3 className="section-title mb-40">
                            Trending Products for you!
                        </h3>
                    </div>
                    <div className="trending-product-item-wrap">
                        <div className="trending-single-item">
                            <div className="trending-thumbnail-wrap">
                                <img
                                    src="/images/furniture village-min.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 46vw, 628.49609375px"
                                    alt=""
                                    className="trending-image"
                                />
                            </div>
                            <div className="trending-content">
                                <h3 className="trending-product-title">
                                    Furniture Village
                                </h3>
                                <div className="trending-product-paragraph color-black">
                                    Delivery with in 24 hours
                                </div>
                                <div className="is-magnetic">
                                    <div className="btn-wrapper"><a href="#" className="primary-button black w-inline-block">
                                        <div className="button-content">
                                            <div className="button-color">Shop Now</div>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="trending-single-item">
                            <div className="trending-thumbnail-wrap">
                                <img
                                    src="/images/Fashion world-min.png"
                                    loading="lazy"
                                    sizes="(max-width: 479px) 100vw, (max-width: 1439px) 46vw, 628.515625px"
                                    alt=""
                                    className="trending-image"
                                />
                            </div>
                            <div className="trending-content">
                                <h3 className="trending-product-title">Fashion World</h3>
                                <div className="trending-product-paragraph color-black">
                                    Delivery with in 24 hours
                                </div>
                                <div className="is-magnetic">
                                    <div className="btn-wrapper">
                                        <a href="#" className="primary-button black w-inline-block">
                                            <div className="button-content">
                                                <div className="button-color">Shop Now</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default TrendingProductsArea;
