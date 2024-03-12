'use client';
import MainFooter from '@/shared/components/footer/MainFooter';
import MainHeader from '@/shared/components/header/MainHeader';
import React, { useEffect } from 'react'
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct, decreaseQuantity, increaseQuantity, removeFromCart } from '@/shared';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {

    const [isLoading, setIsLoading] = React.useState(true);
    const [subTotal, setSubTotal] = React.useState(0.0);
    const [total, setTotal] = React.useState(0.0);
    const [delivery, setDelivery] = React.useState(0.0);
    const [tax, setTax] = React.useState(0);
    const [currency, setCurrency] = React.useState('GH¢');

    const cart = useSelector((state: any) => state.cart.cart);
    const user = useSelector((state: any) => state.user.user);
    const dispatch = useDispatch();
    const router = useRouter();

    const calculateTotal = () => {
        let subTotal = 0;
        cart?.forEach((item: { product: IProduct, quantity: number }) => {
            subTotal += item.product.price.amount * item.quantity;
        });
        setSubTotal(subTotal);
        setDelivery(0);
        setTax(0);
        const totalAmount = subTotal + delivery + tax;
        const total = Math.round(totalAmount * 100) / 100;
        setTotal(total);
    }

    // console.log(cart);
    useEffect(() => {
        setIsLoading(false);
        calculateTotal();
        // get the currency from the first product in the cart
        if (cart?.length > 0) {
            setCurrency(cart[0]?.product?.price?.currency);
        }
    }, [cart]);

    return (
        <React.Fragment>
            <MainHeader />
            <div className="w-full max-w-screen-xl mx-auto">
                {
                    isLoading && (
                        <div className='space-y-2'>
                            <div className="animate-pulse flex items-center space-x-4">
                                <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                            </div>
                            <div className="animate-pulse flex items-center space-x-4">
                                <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                            </div>
                            <div className="animate-pulse flex items-center space-x-4">
                                <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                            </div>
                        </div>
                    )
                }
                {!isLoading && <div className="grid lg:grid-cols-3 gap-12 p-6">
                    <div className="lg:col-span-2 bg-white divide-y">
                        {
                            cart?.map((item: { product: IProduct, quantity: number }, _: number) => {
                                const { product, quantity } = item;
                                // console.log(product);
                                return (
                                    <CartCard
                                        key={product.id}
                                        name={product?.name}
                                        image={product?.images[0]?.path}
                                        price={product?.price?.amount}
                                        currency={product?.price?.currency}
                                        category={product?.categories[0]?.name ?? "Uncategorized"}
                                        quantity={quantity}
                                        onPlus={() => {
                                            dispatch(increaseQuantity({ product: product }));
                                        }}
                                        onMinus={() => {
                                            dispatch(decreaseQuantity({ product: product }));
                                        }}
                                        onRemove={() => {
                                            dispatch(removeFromCart({ product: product }));
                                        }}
                                    />
                                )
                            })
                        }
                        {
                            // if cart is empty, show add some products to cart call to action
                            cart?.length === 0 && <div className="text-center py-12">
                                <h3 className="text-xl font-extrabold text-[#333] mb-6">Your cart is empty</h3>
                                <Link
                                    type="button"
                                    href={'/products/'}
                                    className="no-underline text-center text-md px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded"
                                >
                                    Add some products
                                </Link>
                            </div>
                        }
                    </div>
                    <div className="shadow-md p-6">
                        <h3 className="text-xl font-extrabold text-[#333] border-b pb-4">
                            Order Summary
                        </h3>
                        <ul className="text-[#333] divide-y mt-6">
                            <li className="flex flex-wrap gap-4 text-md py-4">
                                Subtotal <span className="ml-auto font-bold">{currency} {subTotal}</span>
                            </li>
                            <li className="flex flex-wrap gap-4 text-md py-4">
                                Delivery <span className="ml-auto font-bold">{currency} {delivery}</span>
                            </li>
                            {/* <li className="flex flex-wrap gap-4 text-md py-4">
                                Tax <span className="ml-auto font-bold">$4.00</span>
                            </li> */}
                            <li className="flex flex-wrap gap-4 text-md py-4 font-bold">
                                Total <span className="ml-auto">{currency} {total}</span>
                            </li>
                        </ul>
                        <button
                            type="button"
                            onClick={() => {
                                // if use is not logged in, redirect to login page
                                if (!user) {
                                    router.push('/auth/');
                                    return;
                                } else {
                                    router.push('/checkout/');
                                }
                            }}
                            className="no-underline text-center mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded"
                        >
                            Check out
                        </button>
                    </div>
                </div>}
            </div>

            <MainFooter />
        </React.Fragment>
    );
}

export default CartPage
