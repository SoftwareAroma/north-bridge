'use client';

import MainFooter from '@/components/footer/MainFooter';
import MainHeader from '@/components/header/MainHeader';
import ProductCard from '@/widgets/ProductCard';
import React from 'react';

const ProductsPage = () => {
    return (
        <React.Fragment>
            <MainHeader />
            <div className="flex flex-col justify-center items-center h-full px-4">
                <div className='w-full px-12 items-center align-center-both py-4'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-full max-w-6xl "
                    />
                </div>
                <div className="grid grid-cols-12 w-full">
                    <aside className='col-span-4 px-8 w-full'>
                        {/* filter by price, brand, store */}
                        <div className="w-full max-w-6xl">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-semibold">Filter</h3>
                                <button className="text-sm hover:underline hover:text-blue-500 font-semibold">
                                    Clear All
                                </button>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Price</span>
                                    </div>
                                    <select
                                        className="select select-bordered w-full"
                                        onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option disabled defaultValue={'None'}>None</option>
                                        <option>Highest to Lowest</option>
                                        <option>Lowest to Highest</option>
                                        <option>Range</option>
                                    </select>
                                </label>
                                {/* if range is selected, show a slider to change range */}
                                <input
                                    type="range"
                                    min={0}
                                    max="100"
                                    value="25"
                                    className="range mt-2"
                                    step="25"
                                    onChange={(e) => console.log(e.target.value)}
                                />
                                <div className="w-full flex justify-between text-xs px-2">
                                    <span>10</span>
                                    <span>50</span>
                                    <span>100</span>
                                    <span>150</span>
                                    <span>200</span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Brand</span>
                                    </div>
                                    <select
                                        className="select select-bordered"
                                        onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option disabled defaultValue={'None'}>None</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text">Store</span>
                                    </div>
                                    <select
                                        className="select select-bordered"
                                        onChange={(e) => console.log(e.target.value)}
                                    >
                                        <option disabled defaultValue={'None'}>None</option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </aside>
                    <main className="col-span-8 w-full grid gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4">
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                        <ProductCard
                            image="/images/instax mini 9-min.png"
                            name="Instax Mini 9"
                            price="99"
                            description="Selfie mode and selfie mirror, Macro mode"
                            rating="121"
                            currency="GH¢"
                            isExt={true}
                            showShaddow={true}
                            isCursorOff={false}
                        />
                    </main>
                </div>
            </div>
            <MainFooter />
        </React.Fragment>
    )
}

export default ProductsPage;