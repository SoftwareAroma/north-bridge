import React from 'react'
import PaymentCard from './PaymentCard';

const AcceptedPaymentCards = () => {
    return (
        <div>
            <div className="footer-payment-wrap mobile-none">
                <h2 className="footer-menu-title">Accepted Payments</h2>
                <div className="footer-payment-thumb-wrap">
                    <PaymentCard
                        image='/images/stripe.png'
                    />
                    <PaymentCard
                        image='/images/visa.png'
                    />
                    <PaymentCard
                        image='/images/Mastercard.png'
                    />
                    <PaymentCard
                        image='/images/Amazon.png'
                    />
                    <PaymentCard
                        image='/images/Klarna.png'
                    />
                    <PaymentCard
                        image='/images/PayPal.png'
                    />
                    <PaymentCard
                        image='/images/ApplePay.png'
                    />
                    <PaymentCard
                        image='/images/GooglePay.png'
                    />
                </div>
            </div>
        </div>
    )
}

export default AcceptedPaymentCards;