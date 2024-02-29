import Link from 'next/link';
import React from 'react'

const FooterHelpNav = () => {
    return (
        <React.Fragment>
            <div className="footer-nav">
                <h2 className="footer-menu-title">Help</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <Link href="#" className='no-underline'>
                        <li className="list-item">Shopcart Help</li>
                    </Link>
                    <Link href="#" className='no-underline'>
                        <li className="list-item">Returns</li>
                    </Link>
                    <Link href="/contact/" className='no-underline'>
                        <li className="list-item">contact us</li>
                    </Link>
                    <Link href="#" className='no-underline'>
                        <li className="list-item">Security &amp; Fraud</li>
                    </Link>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterHelpNav;