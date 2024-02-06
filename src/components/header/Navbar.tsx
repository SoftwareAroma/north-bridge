'use client';

import Link from 'next/link';
import React from 'react';
import Logo from '../Logo';

const Navbar = () => {

    return (
        <React.Fragment>
            <section className="navbar-logo-left">
                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner"
                    className="navbar-logo-left-container w-nav">
                    <div className="container overflow-visible">
                        <div className="navbar-wrapper">
                            <Logo />
                            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                                <ul role="list" className="nav-menu-two w-list-unstyled">
                                    <li>
                                        <div className="link-list-dropdown-wrapper w-dropdown">
                                            <div className="link-list-dropdown-toggle w-dropdown-toggle">
                                                <div className="text-block-7">Category</div>
                                                <div className="link-list-dropdown-icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                        <g className="nc-icon-wrapper" fill="currentColor">
                                                            <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                                                                fill="currentColor"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                            <nav className="navmenu-dropdown w-dropdown-list">
                                                {/* category list here */}
                                            </nav>
                                        </div>
                                    </li>
                                    <li><a href="#" className="nav-link">Deals</a></li>
                                    <li className="d-ipad-pro-none"><a href="#" className="nav-link">What’s New</a></li>
                                    <li className="d-ipad-pro-none"><a href="#" className="nav-link">Delivery</a></li>
                                </ul>
                                <div className="search">
                                    <div className="zero-widht">
                                        <div className="card-star"></div>
                                    </div>
                                    <form action="/search" className="search-form w-form">
                                        <input
                                            id="search-input"
                                            autoComplete="off"
                                            placeholder="Search Product"
                                            type="search"
                                            className="search-input jetboost-list-search-input-znwz w-input"
                                        />
                                        <div className="search-loader"></div>
                                        <button className="search-btn">
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
                                    </form>
                                </div>
                            </nav>
                            <div className="nav-right-content">
                                <Link href="/auth/" className="nav-right-link w-inline-block">
                                    <div className="nav-icon">
                                        <img src="/images/user.png"
                                            loading="lazy" alt="" />
                                    </div>
                                    <div>Account</div>
                                </Link>
                                <a href="/checkout/" className="nav-right-link mr-45 w-inline-block">
                                    <div className="nav-icon">
                                        <img
                                            src="/images/shopping-cart-add.png" loading="lazy"
                                            alt="" />
                                    </div>
                                    <div>Cart</div>
                                </a>
                            </div>
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Navbar;