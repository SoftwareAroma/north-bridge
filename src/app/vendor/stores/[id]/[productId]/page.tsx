'use client';

import ProductDetailView from '@/app/vendor/components/ProductDetailView';
import { IProduct, getProduct } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import React, { useState, useMemo, Dispatch, SetStateAction } from 'react';

const StoreProductPage = ({ params }: { params: { productId: string } }) => {

    const { productId } = params;
    const [product, setProduct]: [IProduct | null, Dispatch<SetStateAction<IProduct | null>>] = useState<IProduct | null>(null);

    const getProductDetail = async () => {
        return await getProduct(productId);
    };

    // Queries
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['productDetail'],
        queryFn: getProductDetail,
        enabled: true,
    });
    // console.log(data?.data.data.product);

    const _productDelete = async (id: string) => {

    }

    useMemo(() => {
        if (data) {
            setProduct(data?.data.data.product);
        }
    }, [data]);

    return (
        <React.Fragment>
            {/* a ping loading animation when loading */}
            {
                isLoading &&
                <div className="flex justify-center items-center h-64">
                    <div className="animate-ping rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            }
            {
                product && !isLoading && (
                    <ProductDetailView product={product} />
                )
            }
        </React.Fragment>
    );
}

export default StoreProductPage
