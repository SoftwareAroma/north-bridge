import React from 'react';

const CopyRight = () => {
    return (
        <div>
            <div className="copyright-content">
                <div className="copyright-left-menu-wrap">
                    <div id="button" className="topbar-left-menu d-block">
                        <img
                            src="/images/briefcase.svg" loading="lazy" alt=""
                            className="copyright-menu-icon" />
                        <div className="footer-menu-text">Become Seller</div>
                    </div>
                    <div id="button" className="topbar-left-menu d-block">
                        <img
                            src="/images/gift.svg" loading="lazy" alt=""
                            className="copyright-menu-icon" />
                        <div className="footer-menu-text">Gift Cards</div>
                    </div>
                    <div id="button" className="topbar-left-menu d-block">
                        <img
                            src="/images/help-circle.svg" loading="lazy" alt=""
                            className="copyright-menu-icon" />
                        <div className="footer-menu-text">Help Canter</div>
                    </div>
                </div>
                <div className="copyright-menu">
                    <a href="#" className="footer-menu-link">
                        Terms of Service
                    </a>
                    <a href="#" className="footer-menu-link two">
                        Privacy &amp; Policy
                    </a>
                </div>
                <div className="copyright-text">
                    All Right reserved by North Briddge | 2023
                </div>
            </div>
        </div>
    )
}

export default CopyRight;