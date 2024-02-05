import React from 'react';

const BannerArea = () => {
    return (
        <React.Fragment>
            <section className="banner-area">
                <div className="container">
                    <div className="banner-inner">
                        <div className="banner-content">
                            <div className="overflow-hidden">
                                <h1 className="banner-title">shopping and</h1>
                            </div>
                            <div className="overflow-hidden mb-30">
                                <h1 className="banner-title">department store.</h1>
                            </div>
                            <div className="overflow-hidden">
                                <p>
                                    Shopping is a bit of a relaxing hobby for me, <br /> which is sometimes troubling for the bank balance.
                                </p>
                            </div>
                        </div>
                        <div className="banner-button">
                            <div className="is-magnetic">
                                <div className="btn-wrapper"><a href="#" className="primary-button bg-main w-inline-block">
                                    <div className="button-content">
                                        <div className="button-color">Learn More</div>
                                    </div>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-stage-wrap">
                    <div className="banner-stage-bg">
                        <img
                            src="/images/bg-stage.png"
                            loading="lazy" sizes="(max-width: 1439px) 100vw, 1440px"
                            alt=""
                        />
                    </div>
                    <div className="banner-product-image-one">
                        <img
                            src="/images/other-min.png" loading="lazy" alt="" /></div>
                    <div className="banner-product-image-two">
                        <img src="/images/tour-min.png" loading="lazy" alt="" />
                    </div>
                    <div className="banner-product-image-three">
                        <img src="/images/ele.png"
                            loading="lazy" alt="" />
                    </div>
                    <div className="banner-product-image-four">
                        <img src="/images/snaks-min.png" loading="lazy" alt="" />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default BannerArea;