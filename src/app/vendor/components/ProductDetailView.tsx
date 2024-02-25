import { IProduct, deleteProduct } from '@/shared';
import { isAxiosError } from 'axios';
import React from 'react';

type ProductDetailViewProps = {
    product: IProduct;
}

const ProductDetailView = (props: ProductDetailViewProps) => {
    const { product } = props;

    const _deleteProduct = async (id: string) => {
        try {
            const response = await deleteProduct(id);
            if (response.data.success === true) {
                // go back to the previous page
                window.history.back();
            } else {
                // alert the user
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)) {
                alert(error?.response?.data.message);
            }
        }
    }

    return (
        <React.Fragment>
            <div className="font-[sans-serif] bg-white">
                <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                    <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                            <div className="bg-gray-800 px-4 py-10 rounded-xl">
                                <img
                                    src="https://readymadeui.com/images/coffee2.webp"
                                    alt="Product"
                                    className="w-4/5 rounded object-cover"
                                />
                            </div>
                            <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
                                <div className="bg-gray-800 rounded-xl p-4">
                                    <img
                                        src="https://readymadeui.com/images/coffee3.webp"
                                        alt="Product2"
                                        className="w-24 cursor-pointer"
                                    />
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4">
                                    <img
                                        src="https://readymadeui.com/images/coffee4.webp"
                                        alt="Product2"
                                        className="w-24 cursor-pointer"
                                    />
                                </div>
                                <div className="bg-gray-800 rounded-xl p-4">
                                    <img
                                        src="https://readymadeui.com/images/coffee5.webp"
                                        alt="Product2"
                                        className="w-24 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-extrabold text-yellow-300">{product.name}</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <p className="text-yellow-300 text-4xl font-bold">
                                    {product.price.currency} {product.price.amount}
                                </p>
                                {/* <p className="text-gray-400 text-xl">
                                    <span className='line-through'>{product.price.currency} {parseFloat(product.price.amount.toString()) + 2}</span>
                                    <span className="text-sm ml-1">Tax included</span>
                                </p> */}
                            </div>
                            <div className="flex space-x-2 mt-4">
                                <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                {/* <h4 className="text-white text-base">500 Reviews</h4> */}
                            </div>
                            {/* <div className="flex flex-wrap gap-4 mt-8">
                                <button type="button" className="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-bold rounded">Buy now</button>
                                <button type="button" className="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-bold rounded">Add to cart</button>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-lg font-bold text-yellow-300">About {product.name}</h3>
                                <ul className="space-y-3 list-disc mt-4 pl-0 text-sm text-white">
                                    <p className='text-sm md:text-lg lg:text-xl text-white'>{product.description}</p>
                                </ul>
                            </div> */}
                            <div className="mt-8">

                                {/* quantity in stock */}
                                <div className="flex flex-row justify-start items-start space-x-1">
                                    <div>
                                        <p className="text-sm md:text-lg lg:text-xl text-yellow-300">
                                            Quantity:
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-lg lg:text-xl font-bold text-black">
                                            {product.quantity}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-row justify-start items-start space-x-1">
                                    <div>
                                        <p className="text-sm md:text-lg lg:text-xl text-yellow-300">
                                            Status:
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm md:text-lg lg:text-xl font-bold text-black">
                                            {product.status}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <button
                                        type="button"
                                        className="min-w-[200px] px-4 py-3 bg-red-300 hover:bg-red-400 text-black text-sm font-bold rounded"
                                        onClick={() => _deleteProduct(product.id)}
                                    >
                                        Delete Product
                                    </button>
                                </div>

                                {/* <ul className="flex">
                                    <li className="text-white font-bold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                                        Reviews</li>
                                    <li className="text-white font-bold text-sm py-3 px-8 cursor-pointer">Sellter</li>
                                </ul> */}
                                {/* <div className="mt-8">
                                    <h3 className="text-lg font-bold text-yellow-300">Reviews(10)</h3>
                                    <div className="space-y-3 mt-4">
                                        <div className="flex items-center">
                                            <p className="text-sm text-white font-bold">5.0</p>
                                            <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                <div className="w-2/3 h-full rounded bg-yellow-300"></div>
                                            </div>
                                            <p className="text-sm text-white font-bold ml-3">66%</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-sm text-white font-bold">4.0</p>
                                            <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                <div className="w-1/3 h-full rounded bg-yellow-300"></div>
                                            </div>
                                            <p className="text-sm text-white font-bold ml-3">33%</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-sm text-white font-bold">3.0</p>
                                            <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                <div className="w-1/6 h-full rounded bg-yellow-300"></div>
                                            </div>
                                            <p className="text-sm text-white font-bold ml-3">16%</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-sm text-white font-bold">2.0</p>
                                            <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                <div className="w-1/12 h-full rounded bg-yellow-300"></div>
                                            </div>
                                            <p className="text-sm text-white font-bold ml-3">8%</p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-sm text-white font-bold">1.0</p>
                                            <svg className="w-5 fill-yellow-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                                <div className="w-[6%] h-full rounded bg-yellow-300"></div>
                                            </div>
                                            <p className="text-sm text-white font-bold ml-3">6%</p>
                                        </div>
                                    </div>
                                </div> */}
                                {/* <div className="flex items-start mt-8">
                                    <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                    <div className="ml-3">
                                        <h4 className="text-sm font-bold text-white">John Doe</h4>
                                        <div className="flex space-x-1 mt-1">
                                            <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                            </svg>
                                            <p className="text-xs !ml-2 font-semibold text-white">2 mins ago</p>
                                        </div>
                                        <p className="text-xs mt-4 text-white">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                    </div>
                                </div>
                                <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-yellow-300 text-yellow-300 font-bold rounded">Read all reviews</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProductDetailView
