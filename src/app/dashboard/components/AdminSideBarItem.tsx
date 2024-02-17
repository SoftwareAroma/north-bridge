import Link from 'next/link';
import React from 'react';

export type ISideBarItem = {
    title: string,
    onClick: () => void,
    active: boolean,
}

const AdminSideBarItem = (props: ISideBarItem) => {
    const { title, onClick, active = false } = props;
    return (
        <React.Fragment>
            <button
                className={`px-2 py-4 w-full uppercase tracking-widest font-semibold bg-gray-50 ${active ? 'bg-green-800 text-white' : ''} hover:bg-green-600 hover:text-white no-underline text-start`}
                onClick={onClick}
            >
                {title}
            </button>
        </React.Fragment>
    )
}

export default AdminSideBarItem
