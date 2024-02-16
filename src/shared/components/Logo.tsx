import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <React.Fragment>
            <Link href="/" className='no-underline font-bold tracking-wider text-green-800 uppercase text-md'>
                North Bridge
            </Link>
        </React.Fragment>
    );
}

export default Logo;