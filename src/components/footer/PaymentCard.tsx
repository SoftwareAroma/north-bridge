import React from 'react'

const PaymentCard = ({ image, alt, load, }: { image: string, alt?: string; load?: any }) => {
    return (
        <React.Fragment>
            <div className="payment-single-item">
                <img
                    src={image}
                    loading={load ?? "lazy"}
                    alt={alt ?? 'payment card'}
                />
            </div>
        </React.Fragment>
    )
}

export default PaymentCard;