import React from 'react';
import SelectLanguage from '@shared/components/language/SelectLanguage';
import SelectCountry from '@shared/components/language/SelectCountry';
import Link from 'next/link';

const TopBar = () => {
    return (
        <React.Fragment>
            <div className="flex bg-green-800 text-white items-center">
                <div className="container mx-auto max-w-screen-xl overflow-visible items-center">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-start items-center space-x-2">
                            <img src="/images/Call.svg" loading="lazy" alt="" />
                            <Link
                                href={'https://wa.me/message/PXEXABFAKYRZH1'} target='_blank'
                                className="contact-number no-underline hover:underline"
                            >
                                +233 20 057 7746
                            </Link>
                        </div>
                        <div id="button" className="topbar-left-menu">
                            <div className="text-block-6">
                                Get 50% Off on Selected Items &nbsp; &nbsp;| &nbsp; &nbsp; &nbsp;
                                <span>
                                    <Link href='/products/' className='no-underline hover:underline'>
                                        Shop Now
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center items-center space-x-2">
                            <div className="">
                                <SelectCountry />
                            </div>
                            <div className="">
                                <SelectLanguage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopBar;