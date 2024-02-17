import { Skeleton, Typography } from '@mui/material'
import React from 'react'

const LoadingSkeleton = () => {
    return (
        <React.Fragment>
            <Skeleton width="100%">
                <Typography>.</Typography>
            </Skeleton>
        </React.Fragment>
    )
}

export default LoadingSkeleton
