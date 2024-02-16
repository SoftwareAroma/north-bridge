import React from 'react'

const FooterHelpNav = () => {
    return (
        <React.Fragment>
            <div className="footer-nav">
                <h2 className="footer-menu-title">Help</h2>
                <ul role="list" className="footer-menu-list w-list-unstyled">
                    <li className="list-item">Shopcart Help</li>
                    <li className="list-item">Returns</li>
                    <li className="list-item">track orders</li>
                    <li className="list-item">contact us</li>
                    <li className="list-item">feedback</li>
                    <li className="list-item">Security &amp; Fraud</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default FooterHelpNav;