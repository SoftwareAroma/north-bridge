'use client';
import { IProduct, IProductCategory, getProducts } from '@/shared';
import MainFooter from '@/shared/components/footer/MainFooter';
import MainHeader from '@/shared/components/header/MainHeader';
import ProductCard from '@/shared/widgets/ProductCard';
import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';

const ProductCategoryPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params;

    const [products, setProducts] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        enabled: true,
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // filter product by search term
        setSearchTerm(e.target.value);
    }

    useMemo(() => {
        if (data?.data.data.products) {
            setProducts(data?.data.data.products);
        }
        // filter products to show the slug category
        if (slug) {
            setProducts(data?.data.data.products.filter((product: IProduct) => {
                // if any of the name of the categories matches the slug
                return product.categories.some((category: IProductCategory) => category.name === slug);
            }));
        }
        // filter products to show the search term
        if (searchTerm) {
            setProducts(data?.data.data.products.filter((product: IProduct) => {
                return product.name.toLowerCase().includes(searchTerm.toLowerCase());
            }));
        }
    }, [data, searchTerm]);

    return (
        <React.Fragment>
            <MainHeader />
            <div className="max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center h-full px-4">
                <div className='w-full px-12 items-center align-center-both py-4'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-full"
                        name='search'
                        onChange={(e) => handleSearchChange(e)}
                    />
                </div>
                <main className="col-span-9 w-full grid gap-x-4 gap-y-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 px-4 py-4">
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
                        products?.map((product: IProduct, index: number) => {
                            return (
                                <ProductCard
                                    key={index}
                                    id={product.id}
                                    image={product?.images[0]?.path ?? "/images/instax mini 9-min.png"}
                                    name={product.name}
                                    price={product.price.amount}
                                    description={product.description}
                                    rating={product.rating}
                                    currency={product.price.currency}
                                    isExt={true}
                                    showShadow={true}
                                    isCursorOff={false}
                                />
                            );
                        })
                    }{
                        products?.length === 0 && (
                            <div className="w-full max-w-screen-2xl mx-auto h-full flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                                    No products found for {slug}
                                </h1>
                            </div>
                        )
                    }
                </main>
            </div>
            <MainFooter />
        </React.Fragment>
    );
}

export default ProductCategoryPage
