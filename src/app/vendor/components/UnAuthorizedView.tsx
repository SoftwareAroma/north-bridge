import Link from 'next/link';
import React from 'react';

const UnAuthorizedView = () => {
    return (
        <React.Fragment>
            <div className="w-full h-screen px-8 py-4 flex flex-col justify-center items-center">
                <h3 className='bg-4'>
                    You are not authorized to view this page
                </h3>
                <div className="flex flex-row justify-center items-center space-x-6">
                    <div className="text-lg">
                        Login as a vendor to continue
                    </div>
                    <Link href='/vendor/auth/' className="no-underline bg-blue-600 px-8 py-2 text-white hover:bg-blue-500">
                        login
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default UnAuthorizedView;
