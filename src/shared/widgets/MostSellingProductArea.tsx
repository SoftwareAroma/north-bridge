'use client';

import React from 'react';
import ProductCard from '@shared/widgets/ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const MostSellingProductArea = () => {
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
                        // navigation
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
                            <ProductCard
                                image="/images/instax mini 11-min.png"
                                name="Instax Mini 11"
                                price="89"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/watch-min.png"
                                name="Instax Mini 11"
                                price="89"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/adidas sneakers-min.png"
                                name="Instax Mini 11"
                                price="89"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/pendleton water bottle-min.png"
                                name="Instax Mini 11"
                                price="89"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ProductCard
                                image="/images/cabin-min.png"
                                name="Instax Mini 11"
                                price="89"
                                description="Selfie mode and selfie mirror, Macro mode"
                                rating="121"
                                currency="GH¢"
                                isExt={true}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </React.Fragment>
    );
}

export default MostSellingProductArea;
