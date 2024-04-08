'use client';

import React, { useMemo } from 'react';
import ProductCard from '@shared/widgets/ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import { IProduct, addToCart, getProducts, useAppDispatch, useAppSelector } from '@shared';

const MostSellingProductArea = () => {

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

    // console.log('categories >>> ', data);

    useMemo(() => {
        if (data?.data.data.products) {
            setProducts(data?.data.data.products);
        }
    }, [data]);

    return (
        <React.Fragment>
            <section className="most-selling-product-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3 className="section-title mb-40">Most Selling Products</h3>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={80}
                        slidesPerView={3}
                        breakpoints={
                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }
                        }
                        // navigation 
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <div className="pt-4"></div>
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
                                // show only 6 products
                                if (index < 6) {
                                    return (
                                        <SwiperSlide key={product.id}>
                                            <ProductCard
                                                id={product.id}
                                                image={product.images[0]?.path ?? "/images/instax mini 11-min.png"}
                                                name={product.name}
                                                currency={product.price.currency}
                                                price={product.price.amount}
                                                description={product.description}
                                                rating={product.rating}
                                                isExt={true}
                                                onAddToCart={() => addProdToCart(product)}
                                            />
                                        </SwiperSlide>
                                    );
                                }
                            })
                        }
                        <div className="pt-6"></div>
                    </Swiper>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MostSellingProductArea;
