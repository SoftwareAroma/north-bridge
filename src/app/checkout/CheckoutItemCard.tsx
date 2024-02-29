import React from 'react';

const CheckoutItemCard = (props: any) => {
    const { quantity, price, currency, name, image, } = props;
    return (
        <React.Fragment>
            <div className="grid sm:grid-cols-2 items-start gap-6">
                <div className="px-4 py-6 shrink-0 bg-gray-50 rounded-md">
                    <img
                        src={image ?? 'https://readymadeui.com/images/product10.webp'}
                        className="w-full object-contain"
                    />
                </div>
                <div>
                    <h3 className="text-base text-white">{name}</h3>
                    <ul className="text-xs text-white space-y-3 mt-4">
                        <li className="flex flex-wrap gap-4">
                            Quantity <span className="ml-auto">{quantity}</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                            Total Price
                            <span className="ml-auto">
                                {currency} {price * quantity}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CheckoutItemCard
