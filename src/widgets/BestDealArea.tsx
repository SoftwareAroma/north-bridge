'use client';

import React from 'react';
import ProductCard from '@/widgets/ProductCard';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';;

const BestDealArea = () => {
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
                        // pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide>
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
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BestDealArea;