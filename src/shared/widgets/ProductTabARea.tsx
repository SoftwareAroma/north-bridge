'use client';

import React, { useEffect, useMemo } from 'react';
import ProductOptionChip from "@shared/widgets/ProductOptionChip";
import ProductCard from "@shared/widgets/ProductCard";
import { useQuery } from '@tanstack/react-query';
import { IProduct, IProductCategory, getProductCategories, getProducts } from '@shared';

type TState = {
    name: string;
    state: boolean;
}

const initialActiveState: Array<TState> = [
    { name: 'All', state: true },
];

const ProductTabARea = () => {

    const [activeState, setActiveState] = React.useState(initialActiveState);

    const [products, setProducts] = React.useState([]);

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        enabled: true,
    });

    const [categories, setCategories] = React.useState([]);

    const { data: prodCategories, isLoading: isCatLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getProductCategories,
        enabled: true,
    });

    // console.log('categories >>> ', data);

    useMemo(() => {
        if (data?.data.data.products) {
            setProducts(data?.data.data.products);
        }
        if (prodCategories?.data.data.productCategories) {
            setCategories(prodCategories?.data.data.productCategories);
        }
        // if categories are loaded then set the active state
        if (categories.length > 0) {
            setActiveState([
                ...initialActiveState,
                ...categories.map((category: IProductCategory) => {
                    return {
                        name: category.name,
                        state: false
                    };
                })
            ]);
        }
    }, [data, prodCategories, categories]);

    return (
        <React.Fragment>
            <section className="product-tab-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3 className="section-title mb-40">Today&apos;s Best Deals for you!</h3>
                    </div>
                    <div className="product-tabs w-tabs">
                        <div className="product-tabs-menu w-tab-menu">
                            {
                                activeState?.map((state: TState, index: number) => {
                                    return (
                                        <ProductOptionChip
                                            key={index}
                                            name={state.name}
                                            isActive={state.state}
                                            onClick={(): void => {
                                                // update the state and set all the other states to false
                                                setActiveState(activeState.map((item: TState) => {
                                                    if (item.name === state.name) {
                                                        return {
                                                            name: item.name,
                                                            state: true
                                                        };
                                                    } else {
                                                        return {
                                                            name: item.name,
                                                            state: false
                                                        };
                                                    }
                                                }));
                                            }}
                                        />
                                    );
                                })
                            }
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
                            {
                                (isLoading) && (
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
                            {
                                (!isLoading && data) && products?.map((product: IProduct, index: number) => {
                                    // only show six products
                                    if (index < 8) {
                                        // filter the products based on the active state name and show only the products that match the active state name with the product category
                                        if (activeState.find((state: TState) => state.state === true)?.name === 'All') {
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    id={product.id}
                                                    image={product.images[0].path ?? "/images/leptop sleeve-min.png"}
                                                    name={product.name}
                                                    price={product.price.amount}
                                                    currency={product.price.currency}
                                                    description={product.description}
                                                    rating={product.rating}
                                                    showShadow={true}
                                                />
                                            );
                                        } else if (product.categories[0]?.name === activeState.find((state: TState) => state.state === true)?.name) {
                                            return (
                                                <ProductCard
                                                    key={product.id}
                                                    id={product.id}
                                                    image={product.images[0].path ?? "/images/leptop sleeve-min.png"}
                                                    name={product.name}
                                                    price={product.price.amount}
                                                    currency={product.price.currency}
                                                    description={product.description}
                                                    rating={product.rating}
                                                    showShadow={true}
                                                />
                                            );
                                        }
                                    }
                                })
                            }

                            {/* <ProductCard
                                image="/images/leptop sleeve-min.png"
                                name="Laptop sleeve MacBook"
                                price={59}
                                description="Organic Cotton, fairtrade certified"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/airpod max-min.png"
                                name="AirPods Max"
                                price={559}
                                description="A perfect balance of high-fidelity audio"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/flower leptop sleeve-min.png"
                                name="Flower Laptop Sleeve"
                                price={39}
                                description="15 in. x 10 in. -Flap top closure"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/water pot-min.png"
                                name="Supreme Water Bottle"
                                price={19}
                                description="Table with air purifier, stained veneer/black"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/leptop sleeve macbook-min.png"
                                name="Laptop sleeve MacBook"
                                price={59}
                                description="Organic Cotton, fairtrade certified"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/macbook 13-min.png"
                                name="Macbook pro 13"
                                price={1099}
                                description="256, 8 core GPU, 8 GB"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/homepad-mini-min.png"
                                name="HomePod mini"
                                price={59}
                                description="5 Colors Available"
                                rating={121}
                                showShadow={true}
                            />
                            <ProductCard
                                image="/images/ipad mini-min.png"
                                name="Ipad Mini"
                                price={539}
                                description="Table with air purifier, stained veneer/black"
                                rating={121}
                                showShadow={true}
                            /> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductTabARea;

