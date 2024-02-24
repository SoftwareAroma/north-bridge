import React from 'react'

const LoadingSkeleton = () => {
    return (
        <React.Fragment>
            {/* full page loading skeleton of a table */}
            <div className="animate-pulse bg-white dark:bg-gray-950 rounded-none mt-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y">
                        <thead>
                            <tr>
                                <th className="w-1/4 p-4">Store name</th>
                                <th className="w-1/4 p-4">Location</th>
                                <th className="w-1/4 p-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full">

                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoadingSkeleton
