import Link from 'next/link';
import React from 'react';

const FooterAboutUsNav = () => {
    return (
        <React.Fragment>
            <div className="footer-nav">
                <h2 className="footer-menu-title">About us</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <Link href="#" className='no-underline'>
                        <li className="list-item">About North Briddge</li>
                    </Link>
                    <Link href="#" className='no-underline'>
                        <li className="list-item">News &amp; Blog</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default FooterAboutUsNav;