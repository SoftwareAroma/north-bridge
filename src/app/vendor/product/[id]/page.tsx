'use client';

import { IProduct, getProduct } from '@/shared';
import { useQuery } from '@tanstack/react-query';
import React, { Dispatch, SetStateAction, useMemo, useState } from 'react';
import ProductDetailView from '../../components/ProductDetailView';
import LoadingSkeleton from '../../components/LoadingSkeleton';

const VendorProductPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const [product, setProduct]: [IProduct | null, Dispatch<SetStateAction<IProduct | null>>] = useState<IProduct | null>(null);

    const getProductDetail = async () => {
        return await getProduct(id);
    };

    // Queries
    const { data, isLoading } = useQuery({
        queryKey: ['productDetail'],
        queryFn: getProductDetail,
        enabled: true,
    });

    useMemo(() => {
        if (data) {
            setProduct(data?.data.data.product);
        }
    }, [data]);

    return (
        <React.Fragment>
            {isLoading && <LoadingSkeleton />}
            {
                product && !isLoading && (
                    <ProductDetailView product={product} />
                )
            }
        </React.Fragment>
    );
}

export default VendorProductPage;
