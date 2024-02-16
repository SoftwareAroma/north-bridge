import React from 'react';

const AcceptedPayments = () => {
    return (
        <React.Fragment>
            <div className="footer-payment-wrap dektop-none">
                <h2 className="footer-menu-title">Accepted Payments</h2>
                <div className="footer-payment-thumb-wrap">
                    <div className="payment-single-item"><img
                        src="/images/stripe.png" loading="lazy" alt="" />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/visa.png"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/Mastercard.png"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/Amazon.png"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/Klarna.png" loading="lazy" alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/PayPal.png" loading="lazy" alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/ApplePay.png" loading="lazy" alt=""
                        />
                    </div>
                    <div className="payment-single-item">
                        <img
                            src="/images/GooglePay.png" loading="lazy" alt=""
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AcceptedPayments;