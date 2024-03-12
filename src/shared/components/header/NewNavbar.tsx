'use client';
import React, { useMemo } from 'react';
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setTerm, setUser } from '@/shared/providers';
import { useQuery } from '@tanstack/react-query';
import { IProductCategory, getProductCategories } from '@/shared';
import Link from 'next/link';

const NewNavbar = () => {

    const [show, setShow] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const [categories, setCategories] = React.useState([]);
    const cart = useSelector((state: any) => state.cart.cart);
    const user = useSelector((state: any) => state.user.user);
    const searchTerm = useSelector((state: any) => state.searchTerm.term);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleShow = () => setShow(!show);

    const handleSearchOnChange = (e: any) => {
        e.preventDefault();
        dispatch(setTerm(e.target.value));
    }

    const { data } = useQuery({
        queryKey: ['categories'],
        queryFn: getProductCategories,
        enabled: true,
    });
    const { data: userData } = useQuery({
        queryKey: ['userProfile'],
        queryFn: getProductCategories,
        enabled: true,
    });

    useMemo(() => {
        if (data?.data.data.productCategories) {
            setCategories(data?.data.data.productCategories);
        }
        if (userData?.data.data.user) {
            setUser(userData?.data.data.user);
        }
    }, [data, userData]);

    return (
        <Navbar fluid className='max-w-screen-xl mx-auto w-full'>
            <NavbarBrand href="/" className='no-underline'>
                <span
                    className="self-center whitespace-nowrap text-xl text-green-600 uppercase font-bold dark:text-white"
                >
                    North Bridge
                </span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <div className="nav-right-content">
                    <Link
                        href={user == null ? "/auth/" : "/profile/"}
                        className="nav-right-link w-inline-block"
                    >
                        <div className="nav-icon">
                            <img src="/images/user.png"
                                loading="lazy" alt="" />
                        </div>
                        <div>{user == null ? "Account" : `${user?.userName}`}</div>
                    </Link>
                    <Link href="/cart/" className="nav-right-link mr-45 w-inline-block">
                        <div className="nav-icon">
                            <img
                                src="/images/shopping-cart-add.png"
                                loading="lazy"
                                alt="cart_icon"
                            />
                        </div>
                        {/* cart with number badge */}
                        {
                            cart ? <div className="bg-red-500 px-2 py-1 text-white">
                                {cart?.length}
                            </div> : <div>Cart</div>
                        }
                    </Link>
                </div>
                <div className="px-2">
                    <NavbarToggle />
                </div>
            </div>
            <NavbarCollapse>
                <nav role="navigation" className="nav-menu-wrapper w-nav-menu w-full">
                    <ul role="list" className="nav-menu-two w-list-unstyled w-full">
                        <li>
                            <li
                                className="nav-link no-underline relative cursor-default w-full"
                                onMouseEnter={handleShow}
                            >
                                Categories
                            </li>
                            {
                                show && (
                                    <ul
                                        className="absolute bg-white shadow-md px-4 py-2 flex flex-col justify-start items-start w-full"
                                        onMouseLeave={handleShow}
                                    >
                                        {
                                            categories?.map((category: IProductCategory) => {
                                                return (
                                                    <li
                                                        key={category.id}
                                                        className='capitalize text-sm hover:text-primary cursor-pointer w-full py-2 px-2 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-100'
                                                    >
                                                        <Link
                                                            href={`/products/${category.name}`}
                                                            className="nav-link text-start no-underline"
                                                        >
                                                            {category.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                )
                            }
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="nav-link no-underline"
                            >
                                Deals
                            </Link>
                        </li>
                        <li className="d-ipad-pro-none">
                            <Link
                                href="/products/"
                                className="nav-link no-underline"
                            >
                                What&apos;s New
                            </Link>
                        </li>
                        <li className="d-ipad-pro-none">
                            <Link
                                href="#"
                                className="nav-link no-underline"
                            >
                                Delivery
                            </Link>
                        </li>
                        <div className="sm:block md:hidden w-full flex flex-row justify-between items-center">
                            <Link
                                href={user == null ? "/auth/" : "/profile/"}
                                className="nav-right-link w-inline-block"
                            >
                                <div className="nav-icon">
                                    <img src="/images/user.png"
                                        loading="lazy" alt="" />
                                </div>
                                <div>{user == null ? "Account" : `${user?.userName}`}</div>
                            </Link>
                            <Link href="/cart/" className="nav-right-link mr-45 w-inline-block">
                                <div className="nav-icon">
                                    <img
                                        src="/images/shopping-cart-add.png"
                                        loading="lazy"
                                        alt="cart_icon"
                                    />
                                </div>
                                {/* cart with number badge */}
                                {
                                    cart ? <div className="bg-red-500 px-2 py-1 text-white">
                                        {cart?.length}
                                    </div> : <div>Cart</div>
                                }
                            </Link>
                        </div>
                    </ul>
                    <div className="search">
                        <div className="zero-widht">
                            <div className="card-star"></div>
                        </div>
                        <input
                            id="search"
                            autoComplete="off"
                            placeholder="Search Product"
                            onChange={handleSearchOnChange}
                            value={searchTerm}
                            type="search"
                            name="search"
                            className="search-input jetboost-list-search-input-znwz w-input"
                        />
                        <div className="search-loader"></div>
                        <button
                            onClick={() => {
                                dispatch(setTerm(searchTerm));
                                router.push(`products/`);
                            }}
                            className="search-btn"
                        >
                            <div className="btn-container">
                                <div className="svg w-embed">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.8"
                                            d="M8.33317 3.33317C5.57175 3.33317 3.33317 5.57175 3.33317 8.33317C3.33317 11.0946 5.57175 13.3332 8.33317 13.3332C11.0946 13.3332 13.3332 11.0946 13.3332 8.33317C13.3332 5.57175 11.0946 3.33317 8.33317 3.33317ZM1.6665 8.33317C1.6665 4.65127 4.65127 1.6665 8.33317 1.6665C12.0151 1.6665 14.9998 4.65127 14.9998 8.33317C14.9998 9.87376 14.4773 11.2923 13.5997 12.4212L18.0891 16.9106C18.4145 17.236 18.4145 17.7637 18.0891 18.0891C17.7637 18.4145 17.236 18.4145 16.9106 18.0891L12.4212 13.5997C11.2923 14.4773 9.87376 14.9998 8.33317 14.9998C4.65127 14.9998 1.6665 12.0151 1.6665 8.33317Z"
                                            fill="#231F1E"></path>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </nav>
            </NavbarCollapse>
        </Navbar>
    );
}

export default NewNavbar;
