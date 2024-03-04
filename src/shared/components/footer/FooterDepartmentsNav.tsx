'use client';

import { IProductCategory } from '@/shared/types';
import { getProductCategories } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';

const FooterDepartmentsNav = () => {

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
            <div className="flex flex-col bg-[#f5f6f6] rounded-md shadow-sm px-4 py-4">
                <h2 className="footer-menu-title cursor-pointer">Categories</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
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
                        (!isLoading && data) && categories?.map((category: IProductCategory, index: number) => {
                            // sort and choose five at random
                            // categories.sort(() => Math.random() - 0.5);

                            // return for the first 5 categories
                            if (index < 5) {
                                return (
                                    <li key={category.id} className="list-item cursor-pointer">
                                        {category.name}
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterDepartmentsNav;