'use client';
import React, { useMemo } from 'react';
import ProductCard from "@shared/widgets/ProductCard";
import MainFooter from "@shared/components/footer/MainFooter";
import MainHeader from "@shared/components/header/MainHeader";
import { useQuery } from '@tanstack/react-query';
import {
    IProduct, IProductCategory,
    IStore, addProductToCart, addToCart,
    getProductCategories, getProducts, getStores,
    useAppDispatch,
    useAppSelector
} from '@/shared';
import { useDispatch, useSelector } from 'react-redux';

const initialFilters = {
    price: 'None',
    category: 'None',
    store: 'None',
};

const ProductsPage = () => {
    const searchedTerm = useAppSelector((state) => state.searchTerm.term);
    const user = useAppSelector((state) => state.user.user);
    const [filters, setFilters] = React.useState(initialFilters);
    const [products, setProducts] = React.useState([]);
    const [stores, setStores] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState(searchedTerm);


    const dispatch = useAppDispatch();
    const addProdToCart = async (product: IProduct) => {
        if (user) {
            // await addProductToCart(user.id, product);
        }
        dispatch(addToCart({ product, quantity: 1 }));
    }

    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        enabled: true,
    });

    const { data: storesData } = useQuery({
        queryKey: ['stores'],
        queryFn: getStores,
        enabled: true,
    });

    const { data: prodCategories } = useQuery({
        queryKey: ['categories'],
        queryFn: getProductCategories,
        enabled: true,
    });

    const clearFilters = () => setFilters(initialFilters);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // filter product by search term
        setSearchTerm(e.target.value);
    }

    const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
        // update the filter state
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
    }

    useMemo(() => {
        if (data?.data.data.products) {
            setProducts(data?.data.data.products);
        }
        if (storesData?.data.data.stores) {
            setStores(storesData?.data.data.stores);
        }
        if (prodCategories?.data.data.productCategories) {
            setCategories(prodCategories?.data.data.productCategories);
        }
        // filter products by search term and return all products if search term is empty
        if (searchTerm) {
            const filteredProducts = data?.data.data.products.filter((product: IProduct) => {
                return product.name.toLowerCase().includes(searchTerm.toLowerCase());
            });
            setProducts(filteredProducts);
        }
        // filter the products by price, category and store if they are not None
        if (filters.price !== 'None') {
            const sortedProducts = data?.data.data.products.sort((a: IProduct, b: IProduct) => {
                if (filters.price === 'Highest to Lowest') {
                    return b.price.amount - a.price.amount;
                } else if (filters.price === 'Lowest to Highest') {
                    return a.price.amount - b.price.amount;
                }
            });
            setProducts(sortedProducts);
        }
        if (filters.category !== 'None') {
            const filteredProducts = data?.data.data.products.filter((product: IProduct) => {
                return product?.categories[0]?.name.toLowerCase().includes(filters.category.toLowerCase());
            });
            setProducts(filteredProducts);
        }
        if (filters.store !== 'None') {
            const filteredProducts = data?.data.data.products.filter((product: IProduct) => {
                return product.storeId.includes(filters.store);
            });
            setProducts(filteredProducts);
        }
        // if (searchedTerm != null || searchedTerm !== '') {
        //     const filteredProducts = data?.data.data.products.filter((product: IProduct) => {
        //         return product.name.toLowerCase().includes(searchedTerm.toLowerCase());
        //     });
        //     setProducts(filteredProducts);
        // }
    }, [data, storesData, prodCategories, searchTerm, filters]);

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
                <div className="flex flex-col lg:grid grid-cols-12 w-full">
                    <aside className='col-span-3 px-8 w-full hidden md:block'>
                        {/* filter by price, brand, store */}
                        <div className="w-full max-w-6xl">
                            <div className="flex justify-between items-center">
                                <h3 className="text-2xl font-semibold">Filter</h3>
                                <button
                                    onClick={() => clearFilters()}
                                    className="text-sm hover:underline hover:text-blue-500 font-semibold"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="mt-4">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <p className="label-text">Price</p>
                                    </div>
                                    <select
                                        className="select select-bordered w-full"
                                        onChange={(e) => updateFilter(e)}
                                        name='price'
                                        value={filters.price}
                                    >
                                        <option defaultValue={'None'}>
                                            None
                                        </option>
                                        <option>
                                            Highest to Lowest
                                        </option>
                                        <option>
                                            Lowest to Highest
                                        </option>
                                        <option>
                                            Range
                                        </option>
                                    </select>
                                </label>
                            </div>
                            <div className="mt-4 w-full">
                                <label className="form-control w-full">
                                    <div className="label w-full">
                                        <span className="label-text">Category</span>
                                    </div>
                                    <select
                                        className="select select-bordered w-full"
                                        name='category'
                                        value={filters.category}
                                        onChange={(e) => updateFilter(e)}
                                    >
                                        <option defaultValue={'None'}>None</option>
                                        {
                                            categories?.map((category: IProductCategory, index: number) => (
                                                <option key={index}>{category.name}</option>
                                            ))
                                        }
                                    </select>
                                </label>
                            </div>
                            <div className="mt-4 w-full">
                                <label className="form-control w-full">
                                    <div className="label w-full">
                                        <p className="label-text">Store</p>
                                    </div>
                                    <select
                                        className="select select-bordered w-full"
                                        onChange={(e) => updateFilter(e)}
                                        value={filters.store}
                                        name='store'
                                    >
                                        <option defaultValue={'None'}>None</option>
                                        {
                                            stores?.map((store: IStore, index: number) => (
                                                <option
                                                    key={index}
                                                    value={store.id}
                                                >
                                                    {store.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </label>
                            </div>
                        </div>
                    </aside>
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
                                        onAddToCart={() => addProdToCart(product)}
                                    />
                                );
                            })
                        }
                    </main>
                </div>
            </div>
            <MainFooter />
        </React.Fragment>
    )
}

export default ProductsPage;