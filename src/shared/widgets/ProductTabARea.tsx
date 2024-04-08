'use client';

import React, { useMemo } from 'react';
import ProductOptionChip from "@shared/widgets/ProductOptionChip";
import ProductCard from "@shared/widgets/ProductCard";
import { useQuery } from '@tanstack/react-query';
import { IProduct, IProductCategory, addToCart, getProductCategories, getProducts, useAppDispatch, useAppSelector } from '@shared';

type TState = {
    name: string;
    state: boolean;
}

const initialActiveState: Array<TState> = [
    { name: 'All', state: true },
];

const ProductTabArea = () => {

    const [activeState, setActiveState] = React.useState(initialActiveState);
    const [products, setProducts] = React.useState([]);
    const user = useAppSelector((state) => state.user.user);

    const dispatch = useAppDispatch();
    const addProdToCart = async (product: IProduct) => {
        dispatch(addToCart({ product, quantity: 1 }));
        if (user) {
            // await addProductToCart(user.id, product);
        }
    }

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
                        <h3 className="section-title mb-40">Popular Products</h3>
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
                                                    onAddToCart={() => addProdToCart(product)}
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
                                                    onAddToCart={() => addProdToCart(product)}
                                                />
                                            );
                                        }
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default ProductTabArea;

