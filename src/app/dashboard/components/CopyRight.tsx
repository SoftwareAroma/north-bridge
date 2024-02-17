import { Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';

const CopyRight = (props: any) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/dashboard/">
                North Bridge
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default CopyRight
