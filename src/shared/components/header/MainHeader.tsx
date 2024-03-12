import React from 'react';
import TopBar from './TopBar';
import NavBar from './Navbar';
import Link from 'next/link';
import NewNavbar from './NewNavbar';

const MainHeader = () => {
    return (
        <React.Fragment>
            <header className='flex flex-col'>
                <TopBar />
                {/* <NavBar /> */}
                <NewNavbar />
            </header>
        </React.Fragment>
    );
}

export default MainHeader;