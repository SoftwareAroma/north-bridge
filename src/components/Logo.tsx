import React from 'react';
import Link from 'next/link';

const Logo = () => {
    return (
        <React.Fragment>
            <Link href="/" className='no-underline '>
                <p className="font-bold tracking-wider text-green-800 uppercase text-md">
                    North Briddge
                </p>
            </Link>
        </React.Fragment>
    )
}

export default Logo;