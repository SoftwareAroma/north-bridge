import React from 'react';

const FooterServicesNav = () => {
    return (
        <React.Fragment>
            <div className="footer-nav">
                <h2 className="footer-menu-title">Services</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <li className="list-item">Gift Card</li>
                    <li className="list-item">Mobile App</li>
                    <li className="list-item">Shipping &amp; Delivery</li>
                    <li className="list-item">Order Pickup</li>
                    <li className="list-item">Account Signup</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterServicesNav;