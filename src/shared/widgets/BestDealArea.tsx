'use client';

import React, { useMemo } from 'react';
import ProductCard from '@shared/widgets/ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import { IProduct, getProducts } from '@shared';

const BestDealArea = () => {

    const [products, setProducts] = React.useState([]);

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
            <section className="best-deal-for-you-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3
                            className="section-title mb-40">
                            Todays Best Deals for you!
                        </h3>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={80}
                        slidesPerView={3}
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
                                // only show six products
                                if (index < 6) {
                                    return (
                                        <SwiperSlide key={product.id}>
                                            <ProductCard
                                                id={product.id}
                                                image={product.images[0]?.path ?? "/images/Furniture-min.png"}
                                                name={product.name}
                                                price={product.price.amount}
                                                description={product.description}
                                                rating={product.rating}
                                                currency={product.price.currency}
                                                isExt={true}
                                            />
                                        </SwiperSlide>
                                    );
                                }
                            })
                        }
                        {/* <SwiperSlide>
                            <ProductCard
                                image="/images/homepad-mini-min.png"
                                name="HomePod mini"
                                price="239"
                                description="Table with air purifier, stained veneer/black"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/instax mini 9-min.png"
                                name="Instax Mini 9"
                                price="99"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/base camp duffel 02-min.png"
                                name="Base Camp Duffel M"
                                price="159"
                                description="Table with air purifier, stained veneer/black"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/Tote Medium-min.png"
                                name="Tot e Medium"
                                price="239"
                                description="Canvas, full grain leather"
                                rating="239"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide> */}
                        <div className="pt-6"></div>
                    </Swiper>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BestDealArea;