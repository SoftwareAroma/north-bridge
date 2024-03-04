import React from 'react'

const DiscountBannerArea = () => {
    return (
        <React.Fragment>
            <section className="discount-banner-two">
                <div className="container">
                    <div className="discount-banner-content-two d-flex">
                        <div className="discount-banner-content-inner">
                            <h2 className="discount-title mw100">
                                Get 5% Cash back
                            </h2>
                            <p className="banner-discount-paragraph mb-30">
                                on NorthBridge.com
                            </p>
                            <div className="is-magnetic">
                                <div className="btn-wrapper">
                                    <a href="#" className="primary-button bg-main w-inline-block">
                                        <div className="button-content">
                                            <div className="button-color">Learn More</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="discount-card-thumbnail-wrap">
                            <div className="card-one">
                                <img src="/images/visa card-min.png"
                                    loading="lazy" alt="" className="card-image"
                                />
                            </div>
                            <div className="card-two">
                                <img
                                    src="/images/visa card 02-min.png" loading="lazy"
                                    alt="" className="card-image"
                                />
                            </div>
                            <div className="card-three" >
                                <img
                                    src="/images/visa card 03.svg"
                                    loading="lazy"
                                    alt=""
                                    className="card-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default DiscountBannerArea;
