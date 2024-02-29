import React from 'react'

const SizeButton = (props: any) => {
    const { size } = props
    return (
        <React.Fragment>
            <button
                type="button"
                className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0"
            >
                {size}
            </button>
        </React.Fragment>
    )
}

export default SizeButton
