import React from 'react';
import CopyRight from './CopyRight';
import FooterAboutUsNav from './FooterAboutUsNav';
import FooterServicesNav from './FooterServicesNav';
import FooterHelpNav from './FooterHelpNav';
import FooterDepartmentsNav from './FooterDepartmentsNav';

const MainFooter = () => {
    return (
        <React.Fragment>
            <div className="footer-area">
                <div className="container">
                    <div className="footer-top">
                        <div className="grid grid-cols-4 gap-4">
                            <FooterDepartmentsNav />
                            <FooterAboutUsNav />
                            <FooterServicesNav />
                            <FooterHelpNav />
                        </div>
                    </div>
                    <CopyRight />
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainFooter;