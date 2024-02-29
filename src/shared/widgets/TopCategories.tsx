'use client';

import React, { useMemo } from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import { IProductCategory, getProductCategories } from '@shared';

const TopCategories = () => {
    const [categories, setCategories] = React.useState([]);

    const { data, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getProductCategories,
        enabled: true,
    });

    // console.log('categories >>> ', data);

    useMemo(() => {
        if (data?.data.data.productCategories) {
            setCategories(data?.data.data.productCategories);
        }
    }, [data]);

    return (
        <React.Fragment>
            <section className="shop-category-area">
                <div className="container">
                    <div className="section-title-wrap">
                        <h3
                            className="section-title mb-40">Shop our top categories</h3>
                    </div>
                    <div className="shop-category-wrap">
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
                            (!isLoading && data) && categories?.map((category: IProductCategory) => (
                                <CategoryCard
                                    key={category.id}
                                    title={`${category.name.toString().toUpperCase()}`}
                                    image={category.image ?? "/images/Furniture-min.png"}
                                />
                            ))
                        }
                        {/* <CategoryCard title="Furniture" image="/images/Furniture-min.png" />
                        <CategoryCard title="Hand Bag" image="/images/hand bag-min.png" />
                        <CategoryCard title="Books" image="/images/books-min.png" />
                        <CategoryCard title="Tech" image="/images/tech-min.png" />
                        <CategoryCard title="Sneakers" image="/images/sneakers-min.png" />
                        <CategoryCard title="Travel" image="/images/travel-min.png" /> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default TopCategories;