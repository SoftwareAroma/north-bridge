import React from 'react';
import Link from 'next/link';

const CopyRight = () => {
    return (
        <div>
            <div className="copyright-content">
                <div className="copyright-left-menu-wrap">
                    <Link href='/vendor/' id="button" className="topbar-left-menu d-block no-underline hover:underline">
                        <img
                            src="/images/briefcase.svg"
                            loading="lazy"
                            alt=""
                            className="copyright-menu-icon"
                        />
                        <div className="footer-menu-text">Become Seller</div>
                    </Link>
                    <Link href='/dashboard/' id="button" className="topbar-left-menu d-block no-underline hover:underline">
                        <img
                            src="/images/briefcase.svg"
                            loading="lazy"
                            alt=""
                            className="copyright-menu-icon"
                        />
                        <div className="footer-menu-text">Dashboard</div>
                    </Link>
                    <div id="button" className="topbar-left-menu d-block">
                        <img
                            src="/images/gift.svg"
                            loading="lazy" alt=""
                            className="copyright-menu-icon"
                        />
                        <div className="footer-menu-text">Gift Cards</div>
                    </div>
                    <div id="button" className="topbar-left-menu d-block">
                        <img
                            src="/images/help-circle.svg"
                            loading="lazy" alt=""
                            className="copyright-menu-icon"
                        />
                        <div className="footer-menu-text">Help Canter</div>
                    </div>
                </div>
                <div className="copyright-menu">
                    <Link href="#" className="footer-menu-link no-underline hover:underline">
                        Terms of Service
                    </Link>
                    <Link href="#" className="footer-menu-link two no-underline hover:underline">
                        Privacy &amp; Policy
                    </Link>
                </div>
                <div className="copyright-text">
                    All Right reserved by North Bridge | 2023
                </div>
            </div>
        </div>
    )
}

export default CopyRight;