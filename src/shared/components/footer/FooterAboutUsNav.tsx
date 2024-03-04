import Link from 'next/link';
import React from 'react';

const FooterAboutUsNav = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col bg-[#f5f6f6] rounded-md shadow-sm px-4 py-4">
                <h2 className="footer-menu-title cursor-pointer">About us</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <Link href="#" className='no-underline'>
                        <li className="list-item cursor-pointer">About North Briddge</li>
                    </Link>
                    <Link href="#" className='no-underline'>
                        <li className="list-item cursor-pointer">News &amp; Blog</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default FooterAboutUsNav;