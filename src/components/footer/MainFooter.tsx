import React from 'react';
import CopyRight from './CopyRight';
import AcceptedPayments from './AcceptedPayments';
import Logo from '@components/Logo';
import AcceptedPaymentCards from './AcceptedPaymentCards';
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
                        <div className="footer-columns">
                            <div className="footer-about-us mb-30">
                                <Logo />
                                <p className="footer-paragraph mb-40">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                                    enim velit mollit.
                                </p>
                                <AcceptedPaymentCards />
                                <br />
                                {/* uncomment to show toggle theme button */}
                                {/* <ThemeSwitcher /> */}
                            </div>
                            <FooterDepartmentsNav />
                            <FooterAboutUsNav />
                            <FooterServicesNav />
                            <FooterHelpNav />
                            <AcceptedPayments />
                        </div>
                    </div>
                    <CopyRight />
                </div>
                <div className="courser-area clickable-off">
                    <div className="courser-wrap">
                        <div className="cursor-text">Drag</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MainFooter;