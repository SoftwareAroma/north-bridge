import React from 'react';

const ServiceHelpArea = () => {
    return (
        <React.Fragment>
            <section className="services-help-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3 className="section-title mb-40">Services to help you shop</h3>
                    </div>
                    <div className="services-help-wrap">
                        <div className="services-help-single-item">
                            <div className="service-help-content">
                                <h3 className="service-help-title">Frequently asked questions</h3>
                                <div className="service-help-paragraph">Updates on safe Shopping in our Stores</div>
                            </div>
                            <div className="service-help-thumbnail-wrap">
                                <img
                                    src="/images/faq-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="service-help-image"
                                />
                            </div>
                        </div>
                        <div className="services-help-single-item">
                            <div className="service-help-content">
                                <h3 className="service-help-title">Online Payment Process</h3>
                                <div className="service-help-paragraph">Updates on safe Shopping in our Stores</div>
                            </div>
                            <div className="service-help-thumbnail-wrap">
                                <img
                                    src="/images/onlie payment-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="service-help-image"
                                />
                            </div>
                        </div>
                        <div className="services-help-single-item">
                            <div className="service-help-content">
                                <h3 className="service-help-title">Home Delivery Options</h3>
                                <div className="service-help-paragraph">Updates on safe Shopping in our Stores</div>
                            </div>
                            <div className="service-help-thumbnail-wrap">
                                <img
                                    src="/images/home delivery-min.png"
                                    loading="lazy"
                                    alt=""
                                    className="service-help-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ServiceHelpArea;
