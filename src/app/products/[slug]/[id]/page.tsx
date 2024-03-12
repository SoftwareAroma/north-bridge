'use client';

import { IProduct, addProductToCart, addToCart, getProduct } from '@/shared';
import MainFooter from '@/shared/components/footer/MainFooter';
import MainHeader from '@/shared/components/header/MainHeader';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo, useState } from 'react'
import RatingStarIcon from '@/shared/widgets/RatingStar';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetailsPage = ({ params }: { params: { id: string } }) => {

    const [product, setProduct]: any = useState<IProduct[] | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const user = useSelector((state: any) => state.user.user);
    const dispatch = useDispatch();
    const addProdToCart = async (product: IProduct) => {
        if (user) {
            await addProductToCart(user.id, product);

        }
        dispatch(addToCart({ product, quantity: 1 }));
    }

    const { data, isLoading } = useQuery({
        queryKey: ['product'],
        queryFn: () => getProduct(params.id),
        enabled: true,
    });

    useMemo(() => {
        if (data?.data.data.product) {
            setProduct(data?.data.data.product);
        }
    }, [data]);

    return (
        <React.Fragment>
            <MainHeader />
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                    {
                        isLoading && <div className="flex justify-center items-center h-96">
                            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    }
                    {
                        (!isLoading && data) && <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="w-full lg:sticky top-0 sm:flex gap-2">
                                <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                                    {
                                        product?.images.map((image: any, index: number) => {
                                            return (
                                                <img
                                                    key={index}
                                                    src={image?.path ?? "https://readymadeui.com/images/product1.webp"}
                                                    alt="Product1"
                                                    className="w-full cursor-pointer outline"
                                                    onClick={() => setActiveImage(index)}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <img
                                    src={
                                        product?.images[activeImage]?.path ?? "https://readymadeui.com/images/product1.webp"
                                    }
                                    alt="Product"
                                    className="w-4/5 rounded object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-extrabold text-gray-800">{product?.name}</h2>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <p className="text-gray-800 text-xl font-bold">
                                        {product?.price?.currency} {product?.price?.amount}
                                    </p>
                                </div>
                                <div className="flex space-x-2 mt-4">
                                    {
                                        // show five start and fill up to the number of product.rating to integer
                                        Array.from({ length: 5 }, (_, i) => {
                                            return (
                                                <RatingStarIcon key={i} filled={i < product?.rating ?? 1} />
                                            );
                                        })
                                    }
                                </div>
                                <div className="mt-8">
                                    {/* <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <SizeButton size="SM" />
                                    <SizeButton size="MD" />
                                    <SizeButton size="LG" />
                                    <SizeButton size="XL" />
                                </div> */}
                                    <button
                                        type="button"
                                        onClick={() => { addProdToCart(product) }}
                                        className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        About this product
                                    </h3>
                                    <div className="space-y-3 list-disc mt-4 text-sm text-gray-800">
                                        <p>{product?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <MainFooter />
        </React.Fragment>
    );
}

export default ProductDetailsPage
