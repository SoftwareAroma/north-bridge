'use client';

import { Rating } from 'flowbite-react';
import React from 'react';

const RatingStarIcon = (props: any) => {
    const { filled = true } = props;
    return (
        <React.Fragment>
            <Rating.Star filled={filled} />
        </React.Fragment>
    )
}

export default RatingStarIcon;
