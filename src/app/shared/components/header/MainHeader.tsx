import React from 'react';
import TopBar from './TopBar';
import NavBar from './Navbar';

const MainHeader = () => {
    return (
        <React.Fragment>
            <header className='flex flex-col'>
                <TopBar />
                <NavBar />
            </header>
        </React.Fragment>
    );
}

export default MainHeader;