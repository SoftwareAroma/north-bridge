import Link from 'next/link';
import React from 'react';

const FooterServicesNav = () => {
    return (
        <React.Fragment>
            <div className="footer-nav">
                <h2 className="footer-menu-title">Services</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <Link href="#" className='no-underline'>
                        <li className="list-item">Shipping &amp; Delivery</li>
                    </Link>

                    <Link href="/auth/" className='no-underline'>
                        <li className="list-item">
                            Account Signup
                        </li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterServicesNav;